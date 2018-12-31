/**
 * @ M.AMERY
 */
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../../app.constants';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ReauthenticateService {
    private resourceUrl = SERVER_API_URL + 'rest/core/security/reauthentication';

    constructor(private http: HttpClient) {
    }

    checkReauthentication(url: string) {
        const params: HttpParams = new HttpParams().set('url', url);
        return this.http.get(`${this.resourceUrl}` + '/checkUrl', {params: params});
    }
}
