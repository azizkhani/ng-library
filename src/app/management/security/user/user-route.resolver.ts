/*
 *
 * Created By BH-Angular 4 Generator
 * @ A.Azizkhani / AH.Ghorab
 * 8-9-2017
 *
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {UserService} from './user.service';
import {User} from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserRouteResolver implements Resolve<any> {
    constructor(private userService: UserService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        if (route.params['id'] != undefined) {
            return this.userService.load(route.params['id']);
        }
        return Observable.of(new User());
    }
}

