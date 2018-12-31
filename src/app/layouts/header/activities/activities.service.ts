import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {LoginHistory} from './loginHistory.model';

/**
 * TODO: chera az Generic Service Extend nakarde?
 */
@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {

    private resourceUrl = 'rest/core/security/loginHistory/listHistory';

    constructor(
        private http: HttpClient
    ) {
    }

    getAllActivities(): Observable<LoginHistory[]> {
        return this.http.get<any>(this.resourceUrl);
    }
}
