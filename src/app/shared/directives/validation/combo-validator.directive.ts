/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateCombo]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ComboValidatorDirective), multi: true }
    ]
})
export class ComboValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : '' , shouldBeUpperThan: 2}
     */
        // @Input() bhValidateComboMessage: string;
        // @Input() shouldBeUpperThan: number;
    @Input() bhValidateCombo: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: '', shouldBeUpperThan: -1};
        this.bhValidateCombo = Object.assign(defaultOptions, this.bhValidateCombo);
        this.valFn = this.ComboValidator(this.bhValidateCombo);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    ComboValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let no = options.shouldBeUpperThan ? control.value > options.shouldBeUpperThan : control.value > 0;
            const message = (options.message) ? options.message : 'این مقدار باید وارد شود';
            if (control.value === null) {
                no = false;
            } else if (control.value === '') {
                no = false;
            }
            if (control.dirty) {
                return !no ? {
                    'ComboErr': {
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
