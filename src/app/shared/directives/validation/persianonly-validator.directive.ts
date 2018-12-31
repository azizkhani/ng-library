/**
 * @ S.SEYFI2
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidatePersianOnly]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PersianOnlyValidatorDirective), multi: true }
    ]})
export class PersianOnlyValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidatePersianOnly: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidatePersianOnly = Object.assign(defaultOptions, this.bhValidatePersianOnly);
        this.valFn = this.PersianOnlyValidator(this.bhValidatePersianOnly);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    PersianOnlyValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const PersianOnly_REGEXP = /^[\u0600-\u06FF0-9]+$/;
            const no = PersianOnly_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'PersianOnlyErr': {
                        name,
                        message: (options.message) ? options.message : 'فقط از حروف و اعداد فارسی استفاده کنید '
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
