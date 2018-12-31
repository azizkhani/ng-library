/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidatePasswordCheck]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordCheckValidatorDirective), multi: true}
    ]
})
export class PasswordCheckValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : '' , requirement: ''}
     */
    @Input() bhValidatePasswordCheck: any;
    // @Input() requirement: string;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidatePasswordCheck = Object.assign(defaultOptions, this.bhValidatePasswordCheck);
        this.valFn = this.PasswordCheckValidator(this.bhValidatePasswordCheck);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    PasswordCheckValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let no = options.requirement ? control.value > options.requirement : control.value > 0;
            let message = (options.message);
            const result = this.checkStrength(control.value);
            const strongthVar = ['null', 'veryWeak', 'weak', 'good', 'strong'];
            if (strongthVar.indexOf(result.strongth) >= strongthVar.indexOf(options.requirement)) {
                no = true;
            } else {
                message = result.message;
                no = false;
            }
            if (control.dirty) {
                return !no ? {
                    'PasswordCheckErr': {
                        name,
                        message
                    }
                } : null;
            } else {
                return null;
            }
        };
    }

    private checkStrength(password: string) {
        let strength = 0;
        const jsonData = {
            message: '',
            strongth: 'null'
        };
        if (password.length === 0) {
            jsonData.message = 'این مقدار باید وارد شود';
            return jsonData;
        }
        if (password.length < 6) {
            jsonData.message = 'این پسورد خیلی ضعیف می باشد و تعداد کاراکتر باید بالای 6 کاراکتر باشد ';
            jsonData.strongth = 'veryWeak';
            return jsonData;
        }
        if (password.length > 7) {
            strength += 1;
        }
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            strength += 1;
        }
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
            strength += 1;
        }
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            strength += 1;
        }
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) {
            strength += 1;
        }
        if (strength < 2) {
            jsonData.message = 'این پسورد ضعیف می باشد و می بایست  با پترن های مختلف پسورد خود را قویتر کنید';
            jsonData.strongth = 'weak';
            return jsonData;
        } else if (strength === 2) {
            jsonData.message = 'این پسورد متوسط می باشد و می بایست با پترن های مختلف پسورد خود را قویتر کنید';
            jsonData.strongth = 'good';
            return jsonData;
        } else {
            jsonData.message = 'این پسورد قوی می باشد ';
            jsonData.strongth = 'strong';
            return jsonData;
        }
    }
}
