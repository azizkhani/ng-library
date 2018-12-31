/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateIP]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => IpValidatorDirective), multi: true}
    ]
})
export class IpValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidateIP: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidateIP = Object.assign(defaultOptions, this.bhValidateIP);
        this.valFn = this.ipValidator(this.bhValidateIP);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    ipValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const IP_REGEXP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
            const no = IP_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'ipErr': {
                        name,
                        message: (options.message) ? options.message : 'مقدار  آی پی به درستی تعیین نشده است '
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
