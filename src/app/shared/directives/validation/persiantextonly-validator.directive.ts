/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidatePersianTextOnly]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => PersianLetterOnlyValidatorDirective), multi: true}
    ]
})
export class PersianLetterOnlyValidatorDirective implements Validator, OnInit {
    @Input() bhValidatePersianLetterOnly: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidatePersianLetterOnly = Object.assign(defaultOptions, this.bhValidatePersianLetterOnly);
        this.valFn = this.PersianLetterOnlyValidator(this.bhValidatePersianLetterOnly);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    PersianLetterOnlyValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const PersianLetterOnly_REGEXP = /^[\u0600-\u06FF]+$/;
            // const PersianNumberOnly_REGEXP = /^[\u06F0-\u06F90-9]+$/;
            const no = PersianLetterOnly_REGEXP.test(control.value);
            // let no2 = PersianNumberOnly_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'PersianLetterOnlyErr': {
                        name,
                        message: (options.message) ? options.message : 'فقط از حروف فارسی استفاده کنید'
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
