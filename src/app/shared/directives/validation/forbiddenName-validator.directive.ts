/**
 * @ S.SEYFI
 */
import {Directive, Input, OnChanges, SimpleChanges, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp, message: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const name = control.value;
        const no = nameRe.test(name);
        if (control.dirty) {
            return no ? {
                'forbiddenName': {
                    name: name,
                    message: (message) ? message : 'این مقدار غیر مجاز می باشد'
                }
            } : null;
        } else {
            return null;
        }
    };
}

@Directive({
    selector: '[data_Dva_forbiddeName]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => ForbiddenValidatorDirective), multi: true}
    ]
})
export class ForbiddenValidatorDirective implements Validator, OnChanges {
    @Input() data_Dva_forbiddeName: string;
    @Input() data_Dva_forbiddeName_message: string;

    private valFn = Validators.nullValidator;

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['data_Dva_forbiddeName'];
        if (change) {
            const val: string | RegExp = change.currentValue;
            const re = val instanceof RegExp ? val : new RegExp(val, 'i');
            this.valFn = forbiddenNameValidator(re, this.data_Dva_forbiddeName_message);
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}
