/**
 * @ S.SEYFI
 */
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateCompare]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => CompareValidatorDirective), multi: true }
    ]})
export class CompareValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : '' , str: ''}
     */
        // @Input() bhValidateCompareMessage: string;
        // @Input() str: string;
    @Input() bhValidateCompare: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: '', str: ''};
        this.bhValidateCompare = Object.assign(defaultOptions, this.bhValidateCompare);
        this.valFn = this.CompareValidator(this.bhValidateCompare);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    CompareValidator(options: any): ValidatorFn {
        return null;
    }
}
