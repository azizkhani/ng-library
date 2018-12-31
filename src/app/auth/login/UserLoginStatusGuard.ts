/**
 *
 *    @ H.Rasouli
 */

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AccountService} from '../../shared/auth';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserLoginStatusGuard implements CanActivate {
    constructor(private router: Router,
                private accountService: AccountService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean | Promise<boolean> {
        if (route.queryParams['jReferer'] !== undefined && route.queryParams['jReferer'] !== null) {
            return true;
        }

        return new Promise<boolean>(resolve => {
            this.accountService.get().subscribe(authenticatedUser => {
                if (authenticatedUser !== null && authenticatedUser != undefined) {
                    this.router.navigate(['/home'], {replaceUrl: true});
                    resolve(false);
                } else {
                    resolve(true);
                }
            }, err => {
                /*
                    this is because on http response error codes we have business that we handle in
                    interceptors. i don't want that this gaurd blocks the login route on error responses like 500.
                    we handled such situations in ErrorHandlerInterceptor so here we let it go so it does not halt
                    whole application.
                 */
                resolve(true);
            });
        });
    }
}
