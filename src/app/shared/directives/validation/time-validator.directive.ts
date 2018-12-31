/**
 * @ S.SEYFI
 */
// window.Parsley.addValidator('time', {
//         validateString: function(value){
//             var regx=/^((([0-1][0-9])|(2[0-3])):([0-5][0-9]))|(24:?00)$/
//             if(regx.test(value)){
//                 return true;
//             }
//             else{
//                 return false;
//             }
//         },
//         messages: {
//             fa:  "زمان به درستی تعیین نشده است. مثال صحیح   09:09",
//         }
//     }
// );
import {Directive, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

@Directive({
    selector: '[bhValidateTime]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => TimeValidatorDirective), multi: true}
    ]
})
export class TimeValidatorDirective implements Validator, OnInit {
    /**
     * Input: Object : {message : ''}
     */
    @Input() bhValidateTime: any;
    private valFn = Validators.nullValidator;

    ngOnInit() {
        const defaultOptions = {message: ''};
        this.bhValidateTime = Object.assign(defaultOptions, this.bhValidateTime);
        this.valFn = this.timeValidator(this.bhValidateTime);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }

    timeValidator(options: any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const Time_REGEXP = /^((([0-1][0-9])|(2[0-3])):([0-5][0-9]))|(24:?00)$/;
            const no = Time_REGEXP.test(control.value);
            if (control.dirty) {
                return !no ? {
                    'timeErr': {
                        name,
                        message: (options.message) ? options.message : ' زمان به درستی تعیین نشده است. مثال صحیح   09:09'
                    }
                } : null;
            } else {
                return null;
            }
        };
    }
}
