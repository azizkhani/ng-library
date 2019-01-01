import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthServerProvider {
    constructor(private http: HttpClient) {
    }

    login(credentials): Observable<any> {
        const data = 'username=' + encodeURIComponent(credentials.username) +
            '&password=' + encodeURIComponent(credentials.password) +
            '&jcaptcha=' + encodeURIComponent(credentials.jcaptcha)
            // +'&submit=Login'
        ;
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        if (credentials.showCapcha) {
            headers.append('showCaptcha', '1');
        }

        return this.http.post('login', data, {headers: headers, observe: 'response'});
    }

    logout(): any {
        this.http.post('j_spring_security_logout', {}).subscribe((response) => {
            this.http.get('rest/core/security/user/authenitacedUser').subscribe(() => {});
            return response;
        });
    }
}
