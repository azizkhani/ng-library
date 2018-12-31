/**
 *    @ M.AMERY
 *
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';
import {PasswordsModel} from './passwords.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChangePasswordService {
    resourceUrl = SERVER_API_URL + 'rest/core/security/user/changeUserPassword';

    constructor(private http: HttpClient) {
    }

    changePassword(entity: PasswordsModel, passwordStrength: string): Observable<any> {
        const copy: PasswordsModel = Object.assign({}, entity);
        let headers = new HttpHeaders().set('Ng-Change-Password-Route', 'true');
        return this.http.post(`${this.resourceUrl}/` + passwordStrength, copy, {headers});
    }
}
