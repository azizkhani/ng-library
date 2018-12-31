/*
*
*    @ AH.GHORAB/ H.RASOULI
*
*/
import {HttpResponse} from '@angular/common/http'

export class QueryResult<T> extends HttpResponse<T> {
    constructor(public pageNumber?: number,
                public totalRecords?: number,
                public pageSize?: number,
                public entityList?: T[]) {
        super();
    }

}
