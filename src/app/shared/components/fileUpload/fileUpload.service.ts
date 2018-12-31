import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from '../../genericService/index';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService extends GenericService<any> {

    constructor(http: HttpClient) {
        super(http, 'rest/core/attachment');
    }

    public deleteFile(fileCode: string, isSecured: string): Observable<boolean> {
        if (isSecured === 'true') {
            return this.http.delete<any>(`${this.resourceUrl}/deleteFile/authorized?fileToken=${fileCode}`);
        } else {
            return this.http.delete<any>(`${this.resourceUrl}/deleteFile/${fileCode}`);
        }
    }
}
