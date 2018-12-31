import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pagination} from './pagination.model';

@Component({
    selector: 'bh-pagination',
    template: `
        <div id="paginategrid" style="border-top: 2px dotted #dbe0e2; text-align: center;">
            <ul class="pagination ">
                 <li>
                    <a id="resultNumbergrid" class="btn btn-default btn-sm bg-dutch bh_pagination_totalItemPerPage_count">
                       {{paginationInfo.totalItems}}
                       <span>مورد</span>
                    </a>
                </li>
                <li>
                    <ngb-pagination
                        [collectionSize]="paginationInfo.totalItems"
                        [boundaryLinks]="true" [maxSize]="5"
                        [(pageSize)]="paginationInfo.itemsPerPage"
                        [(page)]="paginationInfo.page"
                        (pageChange)="loadPage(paginationInfo.page)">
                    </ngb-pagination>
                </li>
                <li>
                    <select name="itemPerPage" class="bh_pagination_totalItemPerPage_chossen"
                        [(ngModel)]="this.paginationInfo.itemsPerPage" #itemPerPage="ngModel"
                        (change)="totalItemPerPage()">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </li>
            </ul>
        </div>
        `,
})

export class PaginationComponent implements OnInit {

    @Input() paginationInfo: Pagination;

    @Output() pageChange = new EventEmitter();
    /**
     * TODO: Unused!
     */
    @Output() paginationChange = new EventEmitter();
    @Output() itemPerPageChange = new EventEmitter();

    constructor() {
    }

    ngOnInit() {

    }

    totalItemPerPage() {
        this.paginationChange.emit();
        this.itemPerPageChange.emit();
    }

    loadPage(page: number) {
        if (page !== this.paginationInfo.previousPage) {
            this.paginationInfo.previousPage = page;
            this.pageChange.emit();
            this.paginationChange.emit();
        }
    }
}
