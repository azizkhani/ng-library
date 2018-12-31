/**
 * @ M.AMERY
 */
import {Component} from '@angular/core';


import {PasswordsModel} from './passwords.model';
import {AlertToasterService, AlertToasterType} from '../../shared/components/alert';
import {ChangePasswordService} from './changePassword.service';
import {LoginService} from '../../shared/auth';


@Component({
    selector: 'bh-change-password',
    templateUrl: './changePassword.component.html'
})
export class ChangePasswordComponent {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
    passwordStrength = 'weak';

    constructor(private changePasswordService: ChangePasswordService,
                private loginService: LoginService,
                private alertToasterService: AlertToasterService) {

    }

    changePassword() {
        if (this.confirmNewPassword !== this.newPassword) {
            this.alertToasterService.riseToaster('پسورد با تکرار پسورد تطابق ندارد', AlertToasterType.error);
            return;
        }
        let passwordsModel = new PasswordsModel(this.oldPassword, this.newPassword);
        this.changePasswordService.changePassword(passwordsModel, this.passwordStrength).subscribe((res) => {
            if (res === 1) {
                this.alertToasterService.riseToaster('تغییر با موفقیت انجام شد.',
                    AlertToasterType.info);
                this.logout();
            } else if (res === -1) {
                this.alertToasterService.riseToaster('پسورد قبلی درست نیست.',
                    AlertToasterType.error);
            } else if (res === -2) {
                this.alertToasterService.riseToaster('طول پسوردتان از حد لازم کوتاه تر است.',
                    AlertToasterType.error);
            } else if (res === -3) {
                this.alertToasterService.riseToaster('این پسورد با پسورد قبلی باید در کاراکترها اختلاف داشته باشد.',
                    AlertToasterType.error);
            } else if (res === -4) {
                this.alertToasterService.riseToaster('شما قبلا این پسورد را گذاشته بودید، لذا مجاز به گذاشتن این پسورد نیستید.',
                    AlertToasterType.error);
            } else if (res === -5) {
                this.alertToasterService.riseToaster('پیچیدگی پسورد مورد نظر در حد انتظار نیست.',
                    AlertToasterType.error);
            } else if (res === -10) {
                this.logout();
            }
        });
    }

    logout() {
        this.loginService.logout();
    }

}
