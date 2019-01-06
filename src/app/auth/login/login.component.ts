import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { errorMsg } from '../../blocks/config';
import { LoginService } from '../../shared/auth';
import { BlockIpErrorService } from '../../shared/auth/block-ip-error.service';
import { AlertToasterService, AlertToasterType } from '../../shared/components/alert';
import { BHConfigService } from '../../config.service';


@Component({
    selector: 'bh-login',
    templateUrl: './login.component.html',
    styles: [``]
})
export class LoginComponent implements OnInit {
    @ViewChild('passwordField') passwordField;
    public showCapcha = false;
    public capchaSrc = '';
    public capchaText = '';
    authenticationError: boolean;
    username: string;
    password: string;
    version: string;
    updateDate: string;
    applicationName: string;
    private jReferer = '';

    constructor(private loginService: LoginService,
        private router: Router,
        private route: ActivatedRoute,
        private alertToasterService: AlertToasterService,
        private blockIpErrService: BlockIpErrorService,
        private configService: BHConfigService
    ) {
        this.version = this.configService.getConfig().VERSION;
        this.updateDate = this.configService.getConfig().UPDATED_DATE;
        this.applicationName = this.configService.getConfig().APP_NAME;
    }

    ngOnInit(): void {
        const randDate = new Date();
        const rand = randDate.getSeconds() + randDate.getMilliseconds();
        this.capchaSrc = 'j-captcha.jpg?rand' + rand;
        this.route.queryParams.subscribe(params => {
            if (params['jReferer'] !== undefined && params['jReferer'] !== null) {
                this.jReferer = params['jReferer'];
            }
        });
        this.loginService.isCaptchaActivated().subscribe(res => {
            if (res === true) {
                this.showCapcha = true;
                this.changeCaptcha();
            }
        });
    }

    login() {
        const passwordToSend = this.password;
        this.password = this.generateDiscs(passwordToSend.length);
        this.passwordField.nativeElement.type = 'text';
        if (navigator.userAgent.search('Firefox') >= 0) {
            this.passwordField.nativeElement.style['font-size'] = '22px';
        }
        this.loginService.login({
            username: this.username,
            password: passwordToSend,
            jcaptcha: this.capchaText,
            showCapcha: this.showCapcha
        }).then(res => {
            this.authenticationError = false;
            if (res instanceof HttpResponse) {
                if (this.jReferer !== undefined && this.jReferer !== null && this.jReferer.length !== 0) {
                    this.router.navigate([this.jReferer], {
                        queryParams: { Reauthenticate: true },
                        skipLocationChange: true
                    });
                } else if (res.headers.get('frm.errorLocation') !== undefined
                    && res.headers.get('frm.errorLocation') === 'ChangePassword.jsp') {
                    this.router.navigate(['/changePassword']);
                } else if (res.headers.get('Ng-Change-Password') !== undefined && res.headers.get('Ng-Change-Password') === 'true') {
                    this.router.navigate(['/changePassword']);
                } else {
                    this.router.navigate(['/home']);
                }
            } else {
                this.router.navigate(['/home']);
            }
        }).catch(err => {
            let errMsg: string = errorMsg[err.headers.get('frm.errorCode')];
            if (errMsg === undefined || errMsg === null || errMsg.length === 0) {
                errMsg = 'سامانه قادر به انجام درخواست شما نمیباشد ،خطای شما برای بررسی به مدیر سیستم ارسال گردید';
            }
            this.alertToasterService.riseToaster(errMsg, AlertToasterType.error);
            if (err instanceof HttpErrorResponse) {
                if (err.headers.get('showCaptcha') !== undefined && err.headers.get('showCaptcha') === '1') {
                    this.showCapcha = true;
                    this.changeCaptcha();
                }
                if (err.status === 500 &&
                    this.blockIpErrService.checkBlockIpErrorHeader(err.headers.get(this.blockIpErrService.headerName))) {
                    this.router.navigate(['/error/blockip']);
                }
            }
            this.clearLoginForm();
        });
    }

    changeCaptcha() {
        const randDate = new Date();
        const rand = randDate.getSeconds() + randDate.getMilliseconds();
        this.capchaSrc = 'j-captcha.jpg?rand' + rand;
    }

    public isReauthentication(): boolean {
        return this.jReferer.length > 0;
    }

    private clearLoginForm() {
        this.password = '';
        this.passwordField.nativeElement.type = 'password';
        if (navigator.userAgent.search('Firefox') >= 0) {
            this.passwordField.nativeElement.style['font-size'] = '';
        }
        this.username = '';
        this.capchaText = '';
    }

    private generateDiscs(length: number) {
        const characters = '•';
        let generatedString = '';
        for (let i = 0; i < length; i++) {
            generatedString += characters;
        }
        return generatedString;
    }
}
