/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateNationalCode]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => NationalCodeValidatorDirective), multi: true}
    ]
})
export class NationalCodeValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidateNationalCode: any;
    // @Input() requirement: boolean;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidateNationalCode = Object.assign(defaultOptions, this.bhValidateNationalCode);
        this.valFn = this.NationalCodeValidator(this.bhValidateNationalCode);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    NationalCodeValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {

            let no;
            const message = (options.message) ? options.message : 'کد ملی وارد شده معتبر نمی باشد.';
            if (control.value.length !== 10) {
                no = false;
            }
            if (control.value === '1111111111' || control.value === '2222222222' || control.value === '3333333333'
                || control.value === '4444444444' || control.value === '5555555555'
                || control.value === '6666666666' || control.value === '7777777777'
                || control.value === '8888888888' || control.value === '9999999999') {
                no = false;
            }
            const qwe = Number.parseInt(control.value.charAt(9));
            const n = Number.parseInt(control.value.charAt(0)) * 10 + Number.parseInt(control.value.charAt(1)) * 9 +
                Number.parseInt(control.value.charAt(2)) * 8 + Number.parseInt(control.value.charAt(3)) * 7 +
                Number.parseInt(control.value.charAt(4)) * 6 + Number.parseInt(control.value.charAt(5)) * 5 +
                Number.parseInt(control.value.charAt(6)) * 4
                + Number.parseInt(control.value.charAt(7)) * 3 + Number.parseInt(control.value.charAt(8)) * 2;
            const asd = n - Number.parseInt((n / 11).toString()) * 11;
            if ((asd === 0 && asd === qwe) || (asd === 1 && qwe === 1) || (asd > 1 && qwe === 11 - asd)) {
                no = true;
            } else {
                no = false;
            }
            if (control.dirty) {
                return !no ? {
                    'NationalCodeErr': {
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
