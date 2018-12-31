/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidatemobile]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => MobileValidatorDirective), multi: true}
    ]
})
export class MobileValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidatemobile: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidatemobile = Object.assign(defaultOptions, this.bhValidatemobile);
        this.valFn = this.mobileValidator(this.bhValidatemobile);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    mobileValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const mobile_REGEXP = /^09-?[0-9]{2}-?[0-9]{3}-?[0-9]{4}$/;
            const no = mobile_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'mobileErr': {
                        name,
                        message: (options.message) ? options.message : 'شماره موبایل صحیح نیست '
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
