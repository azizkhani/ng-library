/*
*
*    @ AH.GHORAB
*
*/
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {GroupService} from './group.service';
import {Group} from './group.model';

@Injectable({
    providedIn: 'root'
})
export class GroupRouteResolver implements Resolve<any> {

    constructor(private groupService: GroupService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        if (route.params['id'] !== undefined) {
            return this.groupService.find(route.params['id']);
        }
        return Observable.of(new Group());
    }
}
