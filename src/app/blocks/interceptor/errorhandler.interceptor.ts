/**
 *
 * @H.RASOULI
 *
 */

import {Injector, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {BlockIpErrorService} from '../../shared/auth/block-ip-error.service';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            tap(
            (event) => {
            },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    const router = this.injector.get(Router);
                    if ((err && err.status === 500)) {
                        const blockIpErrService = this.injector.get(BlockIpErrorService);
                        if (blockIpErrService.checkBlockIpErrorHeader(err.headers.get(blockIpErrService.headerName))) {
                            router.navigate(['/blockip']);
                        } else {
                            let message = 'سامانه قادر به انجام درخواست شما نمیباشد ،خطای شما برای بررسی به مدیر سیستم ارسال گردید';
                            if (err && err.error && err.error.message.length > 0) {
                                message = err.error.message;
                            }
                            const toastrService: ToastrService = this.injector.get(ToastrService);
                            toastrService.error(message, 'خطا');
                        }
                    } else if (err && err.status === 403) {
                        if (!err.url.includes('/login') && !err.url.includes('/user/authenitacedUser')) {
                            router.navigate(['/notaccess']);
                        }
                    }
                }
            }
        ));
    }
}
