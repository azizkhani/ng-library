import {Component, Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root'
})
export class CropperPopupService {
    public isOpen = false;

    constructor(private modalService: NgbModal, ) {
    }

    open(component: Component, img: any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        return this.cropperModalRef(component, img);
    }

    public cropperModalRef(component: Component, img: any): NgbModalRef {
        const modalRef = this.modalService.open(component, {size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.imageData = img;
        return modalRef;
    }
}
