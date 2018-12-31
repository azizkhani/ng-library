/*
*
*    @ H.Rasouli
*/

import {Injectable, isDevMode} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Principal } from './principal.service';


@Injectable({
    providedIn: 'root'
})
export class UserRouteAccessService implements CanActivate {
    constructor(private router: Router,
                private principal: Principal) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        if (state.url === '/auth/login') {
            return true;
        }
        const authorities = route.data['authorities'];
        return this.checkLogin(authorities, state.url);
    }

    checkLogin(authorities: string[], url: string): Promise<boolean> {
        const principal = this.principal;
        return Promise.resolve(
            principal.identity().then(account => {
                if (!authorities || authorities.length === 0) {
                    return true;
                }

                if (account) {
                    return principal.hasAnyAuthority(authorities).then(response => {
                        if (response) {
                            return true;
                        }
                        if (isDevMode()) {
                            console.error('User has not any of required authorities: ', authorities);
                        }
                        return false;
                    });
                }
                /**
                 * TODO : az logout login.service estefade beshe
                 */
                this.router.navigate(['/auth/login']).then(() => {
                    // only show the login dialog, if the user hasn't logged in yet
                    if (!account) {
                    }
                });
                return false;
            })
        );
    }
}
