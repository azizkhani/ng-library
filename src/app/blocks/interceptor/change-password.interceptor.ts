import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injector, Injectable} from '@angular/core';
import {Router} from '@angular/router';



@Injectable({
    providedIn: 'root'
})
export class ChangePasswordInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).do(
            event => {
                if (event instanceof HttpResponse) {
                    if (event.headers.get('Ng-Change-Password') !== undefined &&
                        event.headers.get('Ng-Change-Password') !== null &&
                        event.headers.get('Ng-Change-Password') === 'true') {
                        let router: Router = this.injector.get(Router);
                        router.navigate(['/changePassword']);
                    }
                }
            }
        );
    }
}
