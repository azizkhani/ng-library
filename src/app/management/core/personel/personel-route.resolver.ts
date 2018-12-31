/*
*
*    @ AH.GHORAB
*
*/
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {PersonelService} from './personel.service';
import {Personel} from './personel.model';

@Injectable({
    providedIn: 'root'
})
export class PersonelRouteResolver implements Resolve<any> {
    constructor(private personelService: PersonelService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        if (route.params['id'] != undefined) {
            return this.personelService.load(route.params['id']);
        }
        return Observable.of(new Personel());
    }
}
