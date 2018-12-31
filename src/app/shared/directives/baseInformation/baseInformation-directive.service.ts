/**
 *
 *    @ AH.GHORAB/ H.RASOULI
 *
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {coreUrl} from '../../../blocks/config/core.configuration';

/**
 * TODO: az genric service extend nashode
 */
@Injectable({
    providedIn: 'root'
})
export class BaseInformationDirectiveService {

    constructor(private http: HttpClient) {
    }

    public getBaseInformationByParentId(id: string): Observable<any> {
        return this.http.get<any>(coreUrl.baseInformation + id);
    }
}
