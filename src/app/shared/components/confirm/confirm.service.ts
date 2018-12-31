/**
 *
 * @H.RASOULI
 *
 */

import { Injectable } from '@angular/core';

import { ICallback } from './icallback';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationService {

    public config = {
        title: ' حذف؟',
        text: 'آیا از حذف اطلاعات اطمینان کامل دارید؟',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'از حذف اطمینان دارم',
        cancelButtonText: 'لغو!',
        confirmResultTitle: 'حذف',
        confirmResultText: 'با موفقیت انجام شد',
        confirmCancleTitle: 'لغو',
        confirmCancleText: 'عملیات لغو شد'
    };

    constructor() {
    }

    riseConfirmation(init, callback: ICallback) {
        Object.assign(this.config, init);
        Swal({
            title: this.config.title,
            text: this.config.text,
            type: 'warning',
            showConfirmButton: this.config.showConfirmButton,
            showCancelButton: this.config.showCancelButton,
            confirmButtonText: this.config.confirmButtonText,
            cancelButtonText: this.config.cancelButtonText,
        }).then((result) => {
            if (result.value) {
                callback(true);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                callback(false);
            }
        })
    }

    riseAlert(text: string) {
        Swal({
            title: 'توجه',
            text: text,
            type: 'info',
        })
    }
}
