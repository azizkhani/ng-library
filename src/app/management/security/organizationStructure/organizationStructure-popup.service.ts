import {Component, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {OrganizationStructureModel} from './organizationStructure.model';

@Injectable({
    providedIn: 'root'
})
export class OrganizationStructurePopupService {
    private isOpen = false;

    constructor(private modalService: NgbModal,
                private router: Router) {
    }

    open(component: Component, organizationStructureModel: OrganizationStructureModel, editMode: boolean): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        this.organizationStructureModalRef(component, organizationStructureModel);
    }

    organizationStructureModalRef(component: Component, organizationStructureModel: OrganizationStructureModel): NgbModalRef {
        const modalRef = this.modalService.open(component, {size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.organizationStructureModel = organizationStructureModel;
        modalRef.result.then((result) => {
            this.router.navigate([{outlets: {popup: null}}], {replaceUrl: true});
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{outlets: {popup: null}}], {replaceUrl: true});
            this.isOpen = false;
        });
        return modalRef;
    }
}
