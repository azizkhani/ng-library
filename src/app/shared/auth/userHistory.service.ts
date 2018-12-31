/**
 *
 *    @ AH.GHORAB, H.RASOULI
 *
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserHistory} from '../../management/security/user/model';

@Injectable({
    providedIn: 'root'
})
export class UserHistoryService {
    constructor(private http: HttpClient) {
    }

    getUserHistory(): Observable<UserHistory> {
        return this.http.post('rest/core/security/user/getUserHistory', '');
    }
}
