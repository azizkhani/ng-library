/*
*
*    @ H.RASOULI
*
*/
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {PasswordHistory} from './password-history.model';
import {GenericService} from '../../../shared/genericService';

@Injectable({
    providedIn: 'root'
})
export class PasswordHistoryService extends GenericService<PasswordHistory> {

    constructor(public http: HttpClient) {
        super(http, 'rest/core/security/passwordHistory');
    }
}









