import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BlockIpErrorService {

    readonly headerName = 'frm.errorLocation';

    public checkBlockIpErrorHeader(headerValue: string): Boolean | boolean {
        return headerValue !== undefined && headerValue !== null && headerValue.length > 0 &&
            headerValue === '/ErrorPages/BlockIp.jsp';
    }
}
