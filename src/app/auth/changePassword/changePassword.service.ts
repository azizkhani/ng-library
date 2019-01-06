/**
 *    @ M.AMERY
 *
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PasswordsModel } from './passwords.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChangePasswordService {
    public resourceUrl;

    constructor(private http: HttpClient) {
        this.resourceUrl = '/rest/core/security/user/changeUserPassword';
    }

    changePassword(entity: PasswordsModel, passwordStrength: string): Observable<any> {
        const copy: PasswordsModel = Object.assign({}, entity);
        const headers = new HttpHeaders().set('Ng-Change-Password-Route', 'true');
        return this.http.post(`${this.resourceUrl}/` + passwordStrength, copy, { headers });
    }
}
