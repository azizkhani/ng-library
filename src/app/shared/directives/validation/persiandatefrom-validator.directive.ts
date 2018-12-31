/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidatepersiandatefrom]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PersiandatefromValidatorDirective), multi: true }
    ]})
export class PersiandatefromValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : '' , requirement: string}
     */
        // @Input() bhValidatePersianDateFromMessage: string;
        // @Input() requirement: string;
    @Input() bhValidatepersiandatefrom: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: '', requirement: ''};
        this.bhValidatepersiandatefrom = Object.assign(defaultOptions, this.bhValidatepersiandatefrom);
        this.valFn = this.persiandatefromValidator(this.bhValidatepersiandatefrom);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    persiandatefromValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let no;
            const regex = /^1\d{3}\/((0?0[1-6]\/((3[0-1])|([1-2][0-9])|(0?0[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?0[1-9]))))$/;
            no = (regex.test(control.value) && options.requirement <= control.value)
            if (control.dirty) {
                return !no ? {
                    'persiandatefromErr': {
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
