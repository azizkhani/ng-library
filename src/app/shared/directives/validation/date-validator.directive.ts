/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidatedate]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => DateValidatorDirective), multi: true}
    ]
})
export class DateValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : 00
     */
        // @Input() bhValidatedateMessage: string;
    @Input() bhValidatedate: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidatedate = Object.assign(defaultOptions, this.bhValidatedate);
        this.valFn = this.dateValidator(this.bhValidatedate);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    dateValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const date_REGEXP = /^[1-4]\d{3}\/((0?0[1-6]\/((3[0-1])|([1-2][0-9])|(0?0[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?0[1-9]))))$/;

            const no = date_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'dateErr': {
                        name,
                        message: (options.message) ? options.message : ''
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
