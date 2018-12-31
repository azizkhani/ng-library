import {Component, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {OrganizationStructureService} from '../organizationStructure.service';

@Injectable({
    providedIn: 'root'
})
export class OrganizationStructureModalPopupService {
    private isOpen = false;

    constructor(private modalService: NgbModal,
                private router: Router,
                private organizationStructureService: OrganizationStructureService) {
    }

    open(component: Component): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.organizationStructureService.getAll(1, false).subscribe((res) => {
            this.isOpen = true;
            this.organizationStructureModalRef(component, res);
        });

    }

    organizationStructureModalRef(component: Component, resolveRes: string): NgbModalRef {
        const modalRef = this.modalService.open(component, {size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.resolveRes = resolveRes;
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
