/*
*
*    @ AH.GHORAB
*
*/
export class Pagination {
    constructor(
        public defSortValue: string,
        public routeData?: any,
        public totalItems?: number,
        public queryCount?: number,
        public itemsPerPage?: number,
        public page?: number,
        public predicate?: string,
        public previousPage?: any,
        public reverse?: boolean
    ) {
        this.routeData = '';
        this.totalItems = 0;
        this.queryCount = 0;
        this.itemsPerPage = 10;
        this.page = 1;
        this.predicate = this.defSortValue;
        this.previousPage = 0;
        this.reverse = false;
    }

    sort(): string {
        let result;
        if (this.predicate !== this.defSortValue) {
            result = [this.predicate + ' ' + (this.reverse ? 'asc' : 'desc')];
        } else {
            result = [this.defSortValue + ' ' + (this.reverse ? 'asc' : 'desc')];
        }
        return result.toString();
    }

    resetPagination() {
        this.itemsPerPage = 10;
        this.page = 1;
        this.previousPage = 0;
        this.predicate = this.defSortValue;
    }
}
