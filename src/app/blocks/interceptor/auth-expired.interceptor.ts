/**
 *  H.RASOULI
 */

import {Injector, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import {tap} from 'rxjs/operators';
import {LoginService} from '../../shared/auth/login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthExpiredInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {
                },
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401 && !err.url.includes('/user/authenitacedUser')
                            && !err.url.includes('/login')) {
                            const loginService: LoginService = this.injector.get(LoginService);
                            loginService.logout();
                        }
                    }
                }
            )
        );
    }
}
