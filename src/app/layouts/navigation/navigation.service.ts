/**
 *    @ AH.GHORAB
 *
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {NavigationMenuItem} from './navigation.model';


@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    navMenuArray: BehaviorSubject<Array<NavigationMenuItem>> = new BehaviorSubject<Array<NavigationMenuItem>>([]);

    constructor(
        private http: HttpClient
    ) {
    }

    get(): Promise<NavigationMenuItem> {
        return this.http.get('rest/core/menu/MenuItem/listMenu/1').toPromise();
    }

}

