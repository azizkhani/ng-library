/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateTelephone]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => TelephoneValidatorDirective), multi: true}
    ]
})
export class TelephoneValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidateTelephone: string;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidateTelephone = Object.assign(defaultOptions, this.bhValidateTelephone);
        this.valFn = this.telephoneValidator(this.bhValidateTelephone);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    telephoneValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const telephone_REGEXP = /^[0-9\-]+[0-9\-]+$/;
            const no = telephone_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'telephoneErr': {
                        name,
                        message: (options.message) ? options.message : 'شماره تلفن می تواند شامل عدد و خط تیره باشد'
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
