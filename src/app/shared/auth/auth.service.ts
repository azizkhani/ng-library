import {Injectable} from '@angular/core';

import {Principal} from './principal.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private principal: Principal) {
    }

    authorize(force) {
        return this.principal.identity(force).then(authThen.bind(this));

        function authThen() {
            const isAuthenticated = this.principal.isAuthenticated();
            const toStateInfo = null;

            if (isAuthenticated && (toStateInfo.name === 'register')) {
                this.router.navigate(['']);
                return false;
            }

            const fromStateInfo = null;
            const previousState = this.stateStorageService.getPreviousState();
            if (isAuthenticated && !fromStateInfo.name && previousState) {
//                this.stateStorageService.resetPreviousState();
                this.router.navigate([previousState.name], {queryParams: previousState.params});
                return false;
            }

            if (toStateInfo.data.authorities && toStateInfo.data.authorities.length > 0) {
                return this.principal.hasAnyAuthority(toStateInfo.data.authorities).then((hasAnyAuthority) => {
                    if (!hasAnyAuthority) {
                        if (isAuthenticated) {
                            // user is signed in but not authorized for desired state
                            this.router.navigate(['accessdenied']);
                        } else {
                            // user is not authenticated. Show the state they wanted before you
                            // send them to the login service, so you can return them when you're done
//                            this.stateStorageService.storePreviousState(toStateInfo.name, toStateParamsInfo);
                            // now, send them to the signin state so they can log in
                            this.router.navigate(['accessdenied']).then(() => {
//                                this.loginModalService.open();
                            });
                        }
                    }
                    return hasAnyAuthority;
                });
            }
            return true;
        }
    }
}
