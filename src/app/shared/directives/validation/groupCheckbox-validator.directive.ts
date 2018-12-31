/**
 * @ S.SEYFI
 */
import {Directive, ElementRef, Input, OnInit, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

export function groupCheckBoxValidator(el: ElementRef, data_Dva_checkbox_mincheck, data_Dva_checkbox_mincheck_message,
                                       data_Dva_checkbox_maxcheck, data_Dva_checkbox_maxcheck_message): ValidatorFn {
    return (control?: AbstractControl): { [key: string]: any } => {

        let numberOfCheckedBoxes = 0;
        let notValid = true;
        let message = '';
        el.nativeElement.childNodes.forEach(function(element) {
            if (el.nativeElement.childNodes[element].type === 'checkbox') {
                if (el.nativeElement.childNodes[element].checked === true) {
                    numberOfCheckedBoxes++;
                }
            }
        });

        if (numberOfCheckedBoxes < data_Dva_checkbox_mincheck) {

            notValid = true;
            message = (data_Dva_checkbox_mincheck_message) ? data_Dva_checkbox_mincheck_message :
                (' حداقل باید ' + data_Dva_checkbox_mincheck + ' مورد انتخاب شود ');
        } else if (numberOfCheckedBoxes > data_Dva_checkbox_maxcheck) {

            notValid = true;
            message = (data_Dva_checkbox_maxcheck_message) ? data_Dva_checkbox_maxcheck_message :
                (' حداکثر باید ' + data_Dva_checkbox_maxcheck + ' مورد انتخاب شود ');
        } else {

            notValid = false;
        }

        el.nativeElement.nextElementSibling.style.color = (notValid) ? 'red' : 'green';
        el.nativeElement.nextElementSibling.innerText = message;

        return notValid ? {
            'groupCheckBoxErr': {
                name: name,
                message: message
            }
        } : null;
    };
}

@Directive({
    selector: '[data_Dva_checkbox_mincheck]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => GroupCheckBoxValidatorDirective), multi: true}
    ]
})
export class GroupCheckBoxValidatorDirective implements Validator, OnInit {
    @Input() data_Dva_checkbox_mincheck = '1';
    @Input() data_Dva_checkbox_mincheck_message = '';
    @Input() data_Dva_checkbox_maxcheck = '1';
    @Input() data_Dva_checkbox_maxcheck_message = '';

    private valFn = Validators.nullValidator;

    constructor(public el: ElementRef) {
        this.el.nativeElement.insertAdjacentHTML('afterend', '<div id="errMessage"></div>');
    }

    ngOnInit() {

        this.valFn = groupCheckBoxValidator(this.el, parseInt(this.data_Dva_checkbox_mincheck), this.data_Dva_checkbox_mincheck_message,
            parseInt(this.data_Dva_checkbox_maxcheck), this.data_Dva_checkbox_maxcheck_message);
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}
