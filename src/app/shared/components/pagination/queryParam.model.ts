/**
 *
 *    @ H.RASOULI
 *
 */
import {Pagination} from './index';
import {HttpParams} from '@angular/common/http';

export class QueryParam {
    constructor(private paginationModel: Pagination, private paramMap: Map<string, any>) {

    }

    toHttpPrams(): HttpParams {
        let options: HttpParams = new HttpParams();
        options = options.set('pageNumber', (this.paginationModel.page - 1).toString());
        options = options.append('pageSize', this.paginationModel.itemsPerPage.toString());
        options = options.append('order', this.paginationModel.sort());
        this.paramMap.forEach((value: any, key: string) => {
            options = options.append(key, value);
        });
        return options
    }
}
