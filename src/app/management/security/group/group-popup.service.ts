import {Component, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {GroupService} from './group.service';

@Injectable({
    providedIn: 'root'
})
export class GroupActionTreePopupService {
    private isOpen = false;

    constructor(private modalService: NgbModal,
                private router: Router,
                private groupService: GroupService) {
    }

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (id) {
            /* Damn Important
             USE THIS SERVICE HERE ,NEITHER IN RESOLVER NOR POPUP-OPENER-COMPONENT ---->
             OTHERWISE IT'LL RISE ERROR --> HERE IS PART OF ERROR :
             " ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed
             after it was checked. Previous value: 'undefined'. Current value: 'true'.
             It seems like the view has been created after its parent and its children
             have been dirty checked. Has it been created in a change detection hook ? "
             */
            this.groupService.getActionList(id).subscribe((groupActionList) => {
                this.GroupActionTreeModalRef(component, groupActionList);
            });
        } else {
        }
    }

    GroupActionTreeModalRef(component: Component, groupActionList: string): NgbModalRef {
        const modalRef = this.modalService.open(component, {size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.groupActionList = groupActionList;
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
