/**
 *      @M.AMERY
 *
 *      This Interceptor is meant to add a header to every angular request
 *      so our backend can distinguish between jsp clients and angular clients.
 */
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AngularDefinerInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({setHeaders: {'Ng-Client': 'true'}});
        return next.handle(request);
    }
}
