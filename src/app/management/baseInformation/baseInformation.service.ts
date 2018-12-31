/**
 * @ AH.GHORAB/ H.RASOULI
 *
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {coreUrl} from '../../blocks/config';
import {BaseInformation} from './baseInformation.model';

@Injectable({
    providedIn: 'root'
})
export class BaseInformationService {

    constructor(private http: HttpClient) {
    }

    public getBaseInformationByParentId(id: number): Observable<BaseInformation[]> {
        return this.http.get<any>(coreUrl.baseInformation + id);
    }
}
