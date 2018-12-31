/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidatePersianDate]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => PersianDateValidatorDirective), multi: true}
    ]
})
export class PersianDateValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidatePersianDate: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidatePersianDate = Object.assign(defaultOptions, this.bhValidatePersianDate);
        this.valFn = this.PersianDateValidator(this.bhValidatePersianDate);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    PersianDateValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {

            let no;
            const message = (options.message);
            const regex = /^1\d{3}\/((0?0[1-6]\/((3[0-1])|([1-2][0-9])|(0?0[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?0[1-9]))))$/;
            if (regex.test(control.value)) {
                no = true;
            } else {
                no = false;
            }
            if (control.dirty) {
                return !no ? {
                    'PersianDateErr': {
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
