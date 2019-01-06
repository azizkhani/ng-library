/**
 * @ M.AMERY
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ReauthenticateService {
    private resourceUrl;

    constructor(private http: HttpClient) {
        this.resourceUrl = '/rest/core/security/reauthentication';
    }

    checkReauthentication(url: string) {
        const params: HttpParams = new HttpParams().set('url', url);
        return this.http.get(`${this.resourceUrl}` + '/checkUrl', { params: params });
    }
}
