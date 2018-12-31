/**
 * @ S.SEYFI
 */
import {Directive, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateibannumber]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => IbannumberValidatorDirective), multi: true}
    ]
})
export class IbannumberValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidateibannumber: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidateibannumber = Object.assign(defaultOptions, this.bhValidateibannumber);
        this.valFn = this.ibannumberValidator(this.bhValidateibannumber);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    ibannumberValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const ibannumber_REGEXP = /^(([a-zA-Z]){2}([0-9]){24})$/;
            const no = ibannumber_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'ibannumberErr': {
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
