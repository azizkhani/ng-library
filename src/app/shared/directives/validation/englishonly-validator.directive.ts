/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateenglishonly]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EnglishonlyValidatorDirective), multi: true }
    ]})
export class EnglishonlyValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidateenglishonly: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidateenglishonly = Object.assign(defaultOptions, this.bhValidateenglishonly);
        this.valFn = this.englishonlyValidator(this.bhValidateenglishonly);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    englishonlyValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const englishonly_REGEXP = /^(([a-zA-Z]|[0-9]|[_.-])*)$/;
            const no = englishonly_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'englishonlyErr': {
                        name,
                        message: (options.message) ? options.message : 'فقط حروف انگلیسی و اعداد وارد شود.'
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
