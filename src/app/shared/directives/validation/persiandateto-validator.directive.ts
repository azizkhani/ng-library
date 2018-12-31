/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidatePersianDateTo]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PersianDateToValidatorDirective), multi: true }
    ]})
export class PersianDateToValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : '' , requirement: boolean}
     */
    @Input() bhValidatePersianDateTo: any;
    // @Input() requirement: string;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: '', requirement: true};
        this.bhValidatePersianDateTo = Object.assign(defaultOptions, this.bhValidatePersianDateTo);
        this.valFn = this.PersianDateToValidator(this.bhValidatePersianDateTo);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    PersianDateToValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let no;
            const regex = /^1\d{3}\/((0?0[1-6]\/((3[0-1])|([1-2][0-9])|(0?0[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?0[1-9]))))$/;
            no = (regex.test(control.value) && options.requirement >= control.value)
            if (control.dirty) {
                return !no ? {
                    'PersianDateToErr': {
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
