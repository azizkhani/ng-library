/*
*
*    @ AH.GHORAB
*
*/
import {Injectable, Injector} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AlertToasterType} from './alert-toaster.enum';

@Injectable({
    providedIn: 'root'
})
export class AlertToasterService {

    constructor(private injector: Injector) {
    }

    riseToaster(message: string, type: AlertToasterType) {
        let toastr: ToastrService = this.injector.get(ToastrService);

        switch (type) {
            case AlertToasterType.success: {
                toastr.success(message);
                break;
            }
            case AlertToasterType.error: {
                toastr.error(message);
                break;
            }
            case AlertToasterType.warning: {
                toastr.warning(message);
                break;
            }
            default: {
                toastr.info(message);
                break;
            }
        }
    }
}
