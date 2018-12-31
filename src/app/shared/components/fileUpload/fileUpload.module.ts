/*
*
*    @ AH.GHORAB /
*
*/
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';

import {FileUploadComponent} from './fileUpload.component';
import {CropperPopupService} from './cropper-popup.service';
import {FileUploadService} from './fileUpload.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        FileUploadModule,
    ],
    declarations: [
        FileUploadComponent,
    ],
    entryComponents: [
        FileUploadComponent,
    ],
    providers: [
        CropperPopupService,
        FileUploadService
    ],
    exports: [
        FileUploadComponent
    ]
})
export class BHFileUploadModule {

}
