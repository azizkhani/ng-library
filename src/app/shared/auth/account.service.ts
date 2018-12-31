import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from '../account/account.model';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(private http: HttpClient) {
    }

    get(): Observable<Account> {
        return this.http.get('rest/core/security/user/authenitacedUser');
    }

    /*
        save(account: any): Observable<Response> {
            return this.http.post<any>('api/account', account);
        }*/

    getUserAuthorities(): Observable<any[]> {
        return this.http.get<any>('rest/core/security/user/authorities');
    }
}
