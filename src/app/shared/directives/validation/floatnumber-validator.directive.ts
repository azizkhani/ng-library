/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateFloatNumber]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => FloatNumberValidatorDirective), multi: true}
    ]
})
export class FloatNumberValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidateFloatNumber: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidateFloatNumber = Object.assign(defaultOptions, this.bhValidateFloatNumber);
        this.valFn = this.FloatNumberValidator(this.bhValidateFloatNumber);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    FloatNumberValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const FloatNumber_REGEXP = /^[+-]?\d+(\.\d+)?$/;
            const no = FloatNumber_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'FloatNumberErr': {
                        name,
                        message: (options.message) ? options.message : 'لطفا مقدار عددی وارد نمایید'
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
