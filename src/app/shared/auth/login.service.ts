/*
*
*    @ AH.GHORAB / H.Rasouli
*
*/
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AuthServerProvider} from './auth-session.service';
import {Principal} from './principal.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private router: Router,
                private principal: Principal,
                private authServerProvider: AuthServerProvider,
                private httpClient: HttpClient) {
    }

    login(credentials, callback?) {
        const cb = callback || function() {
        };

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe((data) => {
                this.principal.identity(true).then((account) => {
                    resolve(data);
                });
                return cb(data);
            }, (err) => {
                reject(err);
                return cb(err);
            });
        });
    }

    isCaptchaActivated(): Observable<boolean> {
        return this.httpClient.get<boolean>('rest/core/server/api/public/checkCapthca');
    }

    logout() {
        this.authServerProvider.logout().subscribe((response) => {
            this.principal.authenticate(null);
            this.router.navigate(['auth/login']);
        });
    }
}

