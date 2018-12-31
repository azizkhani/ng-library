/**
 * @ S.SEYFI
 */
import {Directive, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateFixLength]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => FixLengthValidatorDirective), multi: true}
    ]
})
export class FixLengthValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : '' , FixLength: 2}
     */
        // @Input() bhValidateFixLengthMessage: string;
        // @Input() str: number;
    @Input() bhValidateFixLength: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: '', FixLength: Number.MAX_VALUE};
        this.bhValidateFixLength = Object.assign(defaultOptions, this.bhValidateFixLength);
        this.valFn = this.FixLengthValidator(this.bhValidateFixLength);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    FixLengthValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const no = control.value.length === options.FixLength ? true : false;
            const message = (options.message) ? options.message : ` تعداد کاراکتر ورودی باید ${options.FixLength}  کاراکتر باشد `;
            if (control.dirty) {
                return !no ? {
                    'FixLengthErr': {
                        name,
                        message
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
