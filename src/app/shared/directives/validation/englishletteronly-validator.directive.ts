/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateenglishletteronly]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EnglishletteronlyValidatorDirective), multi: true }
    ]
})
export class EnglishletteronlyValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidateenglishletteronly: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidateenglishletteronly = Object.assign(defaultOptions, this.bhValidateenglishletteronly);
        this.valFn = this.englishletteronlyValidator(this.bhValidateenglishletteronly);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    englishletteronlyValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const englishletteronly_REGEXP = /^(([a-zA-Z])*)$/;
            const no = englishletteronly_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'englishletteronlyErr': {
                        name,
                        message: (options.message) ? options.message : 'فقط حروف انگلیسی وارد شود.'
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
