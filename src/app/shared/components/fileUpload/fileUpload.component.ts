/**
 * @H.RASOULI/AH.GHORAB
 */
import {AfterContentChecked, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UploadFileType} from './fileUpload.enum';
import {FileUploader} from 'ng2-file-upload';
import {GenericFile} from './genericFile.model';
import {FileUploadService} from './fileUpload.service';
import {AlertToasterService, AlertToasterType} from '../alert';
import {ConfirmationService} from '../confirm';

@Component({
    selector: 'bh-file-upload',
    template:
        `
        <input type="file" #fileInputElement (change)="fileReader($event)" style="display:none;">
        <a [class]=btnClasses style="padding: 7px; font-size:12px;" (click)="openFileChosserDialog()">
            {{uploadButtonName}}
            <i [class]=btnIcon></i>
        </a>
        <div *ngIf="showFileName === 'true'">
            <a [hidden]="_fileCode === ''"
               [class]=removeBtnClass (click)="delete()" style="padding:7px;">
               <i [class]=removeBtnIcon></i>
            </a>
            <p style="padding:7px; height: 32px;  border: 1px solid #e2e2e2; padding-right: 100px;">{{fileName}}</p>
        </div>
        <div *ngIf="showDownload === 'true'">
            <a [class]=downloadBtnClass [attr.href]="(fileCode === '')? '#' : urlHref"
               [class.disabled]="fileCode === '0'" target="_blank">
                <i [class]=downloadBtnIcon></i>
            </a>
        </div>
    `
})
export class FileUploadComponent implements OnInit, AfterContentChecked {

    public _fileCode = '';
    private fileToken = '';
    private uploadUrl = '/save';
    private downloadUrl = '';

    get fileCode(): any {
        return this._fileCode;
    }

    @Input()
    set fileCode(fileCode: any) {
        this._fileCode = (fileCode === null || fileCode === undefined) ? '' : fileCode;
        if (this._fileCode === '') {
            this.fileToken = '';
        }
    }

    @Input() fileName = '';
    @Input() btnClasses: string;
    @Input() btnIcon: string;
    @Input() uploadButtonName = '';

    @Input() showDownload = 'false';
    @Input() downloadBtnIcon = 'fa fa-download fa-lg';
    @Input() downloadBtnClass = 'btn  btn-default';

    @Input() showRemove = 'true';
    @Input() removeBtnClass = 'btn  btn-default';
    @Input() removeBtnIcon = 'fa fa-times fa-lg';

    @Input() fileType: UploadFileType;
    @Input() maxFileSize = '5120000000000000';
    @Input() showFileName = 'false';
    @Input() showCropper = 'false';
    @Input() baseUrl = 'rest/core/attachment';
    @Input() isSecured = 'false';
    // split  with ,
    @Input() allowedExtensions = 'jpg,png';

    @Output() onSaveEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() onDeleteEvent: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('fileInputElement') fileInputElement: ElementRef;

    public urlHref: string;
    public fileUploader: FileUploader = new FileUploader({url: this.baseUrl + this.uploadUrl});
    public cropperModalRef: NgbModalRef;

    constructor(private fileUploadService: FileUploadService,
                private alertToasterService: AlertToasterService,
                private confirmationService: ConfirmationService,
                private changeDetectorRef: ChangeDetectorRef) {
        if (this._fileCode === null || this._fileCode === undefined || this._fileCode === '') {
            this.fileToken = '';
        }
    }

    openFileChosserDialog() {
        this.fileInputElement.nativeElement.click();
    }

    ngOnInit(): void {
        if (this.isSecured === 'true') {
            this.downloadUrl = 'authorized?fileToken=';
            this.uploadUrl = '/upload';
            this.fileUploader.setOptions({url: this.baseUrl + this.uploadUrl});
        }

        this.fileUploader.onCompleteItem = (item: any, response: any, status: any, header: any) => {
            let resp = JSON.parse(response);
            this._fileCode = resp.fileCode;
            this.fileName = resp.fileName;
            this.fileToken = resp.fileToken;
            this.urlHref = 'rest/core/attachment/getFile/' + this.downloadUrl + this.fileCode;
            this.onSaveEvent.emit({
                'isSuccess': resp,
                'fileCode': this.fileCode,
                'fileToken': this.fileToken,
                'fileName': this.fileName
            });
        };
    }

    ngAfterContentChecked(): void {
        this.changeDetectorRef.detectChanges();
    }

    fileReader($event) {
        let input = $event.target;
        if (this.allowedExtensions !== '' && !this.isExtensionAllowed(input.files[0].name)) {
            this.alertToasterService.riseToaster('فرمت فایل مورد نظر مجاز نمی باشد.', AlertToasterType.error);
            return false;
        }
        if (input.files[0].size <= Number(this.maxFileSize)) {
            let file: GenericFile = new GenericFile();
            file.file = input.files[0];
            file.fileName = input.files[0].name;
            this.fileName = file.fileName;
            if (this.showCropper !== 'false') {
            } else {
                this.addToQueue(file);
            }
        } else {
            this.alertToasterService.riseToaster('حجم فایل مورد نظر باید کمتر از ' + 500 + ' کیلوبایت  باشد', AlertToasterType.error);
        }
    }

    addToQueue(genericFile: GenericFile) {
        console.log('file add to queue: ' + this._fileCode);
        this.fileUploader.clearQueue();
        genericFile.fileName = this.fileName;
        this.fileUploader.addToQueue([genericFile.file]);
        this.fileUploader.setOptions({
            additionalParameter: {
                fileCode: this._fileCode
            }
        });
        this.upload();
    }

    upload() {
        // TODO
        // MUltiple Upload With For
        // for (let item of this.fileUploader.queue) {
        //     item.upload();
        // }
        this.fileUploader.queue[0].upload();
    }

    delete() {
        if (this._fileCode !== '') {
            this.confirmationService.riseConfirmation({}, (result: boolean) => {
                if (result) {
                    this.fileUploadService.deleteFile(this._fileCode, this.isSecured).subscribe((res) => {
                        if (res) {
                            this._fileCode = '';
                            this.fileName = '';
                            this.fileToken = '';
                            this.onDeleteEvent.emit({
                                'isSuccess': res,
                                'fileToken': this._fileCode,
                                'fileCode': this._fileCode,
                                'fileName': this.fileName
                            });
                        } else {
                            this.alertToasterService.riseToaster(
                                'خطا در حذف',
                                AlertToasterType.error
                            );
                        }
                    });
                }
            });
        }
    }

    getFileExtension(filename: string) {
        return filename.split('.').pop();
    }

    isExtensionAllowed(filename: string): boolean {
        let extensions = this.allowedExtensions.split(',');
        let extension = this.getFileExtension(filename);
        for (let i = 0; i < extensions.length; i++) {
            if (extensions[i].toLowerCase() === extension.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
}
