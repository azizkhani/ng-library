/**
 * @ M.AMERY
 */
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ReauthenticateService} from './reauthenticate.service';
import {Injectable} from '@angular/core';

/**
 * This gaurd needs to implement Both CanActivate Gaurd and CanActivateChild Gaurd.
 * this is because we need to this gaurd be executed for all routes.
 * with only can activate only root routes will execute this and child routes
 * of root routes will ignore it.
 */
@Injectable({
    providedIn: 'root'
})
export class ReauthenticateGaurd implements CanActivate, CanActivateChild {

    constructor(private reAuthenticationService: ReauthenticateService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.reauthenticationGaurdCheck(route, state);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.reauthenticationGaurdCheck(childRoute, state);
    }

    private reauthenticationGaurdCheck(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
        if (state.url === '/auth/login') {
            return true;
        }
        if (childRoute.queryParams['Reauthenticate'] !== undefined && childRoute.queryParams['Reauthenticate'] === 'true') {
            return true;
        }
        return this.checkReauthentication(state.url, childRoute);
    }

    private checkReauthentication(url: string, route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise<boolean>(resolve => {
            this.reAuthenticationService.checkReauthentication(url)
                .subscribe((data: boolean) => {
                        if (data === true) {
                            this.router.navigate(['auth/login'], {queryParams: {jReferer: url}, skipLocationChange: true});
                            resolve(false);
                        } else {
                            resolve(true);
                        }
                    },
                    err => {
                        /*
                            assuming that HttpResponseErrors are handled with interceptors
                            so we are letting route happen on those situations for not blocking the whole app.
                        */
                        resolve(true);
                    });
        });
    }

}
