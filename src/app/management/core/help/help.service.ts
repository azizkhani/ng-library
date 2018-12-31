import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HelpService {
    constructor(private http: HttpClient) {
    }

    /**
     * TODO: Az any to Help taghir konad
     */
    getAllBackground(): Observable<any> {
        let randDate = new Date();
        let rand = randDate.getSeconds() + randDate.getMilliseconds();
        return this.http.get<any>('rest/core/help/getAllBackground?_=' + rand);
    }

}
