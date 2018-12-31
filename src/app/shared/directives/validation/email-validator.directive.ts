/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

export function emailValidator(message: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        const no = EMAIL_REGEXP.test(control.value);
        if (control.dirty) {
            return !no ? {
                'emailErr': {
                    name: name,
                    message: (message) ? message : 'پست الکترونیکی صحیح نمی باشد'
                }
            } : null;
        } else {
            return null;
        }
    };
}

@Directive({
    selector: '[data_Dva_email]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true}
    ]
})
export class EmailValidatorDirective implements Validator, OnInit {
    @Input() data_Dva_email: string;
    @Input() data_Dva_email_message: string;

    private valFn = Validators.nullValidator;

    ngOnInit() {
        this.valFn = emailValidator(this.data_Dva_email_message);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}

