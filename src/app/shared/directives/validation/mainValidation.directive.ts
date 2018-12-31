/**
 * @ A.GHORAB/H.RASOULI
 */
import {Directive, DoCheck, ElementRef, Input, OnInit, Optional} from '@angular/core';
import {AbstractControl, FormControl, NgControl} from '@angular/forms';


@Directive({
    selector: '[DValidation]'
})
export class MainValidationDirective implements OnInit, DoCheck {

    @Input() DValidation: FormControl;

    oldvalue: any;
    public abstractControl: AbstractControl;

    constructor(public el: ElementRef, @Optional() public model?: NgControl) {
        this.abstractControl = (model) ? model.control : null;

    }

    ngOnInit() {
        this.oldvalue = (this.abstractControl) ? this.abstractControl.value : null;
        this.el.nativeElement.insertAdjacentHTML('afterend', '<a   rel="tooltip"placement="bottom" ngbTooltip="بازخوانی></a>');
    }

    ngDoCheck() {
        if (this.abstractControl) {
            if (this.abstractControl.value !== this.oldvalue) {
                if (this.abstractControl.dirty || this.abstractControl.touched) {
                    this.oldvalue = this.abstractControl.value;
                    if (!this.abstractControl.valid) {
                        for (let ss in this.abstractControl.errors) {
                            if (this.el.nativeElement.nextElementSibling != null) {
                                if (ss === 'required') {
                                    this.el.nativeElement.nextElementSibling.style.color = 'red';
                                    this.el.nativeElement.nextElementSibling.style.borderColor = 'red';
                                    this.el.nativeElement.nextElementSibling.innerText = 'این بخش اجباری باشد';
                                } else if (ss === 'minlength') {
                                    this.el.nativeElement.nextElementSibling.style.color = 'red';
                                    this.el.nativeElement.nextElementSibling.innerText = 'مقدار وارد شده کمتر از مقدار تعیین شده است';
                                } else if (ss === 'maxlength') {
                                    this.el.nativeElement.nextElementSibling.style.color = 'red';
                                    this.el.nativeElement.nextElementSibling.innerText = 'مقدار وارد شده بیشتر از مقدار تعیین شده است';
                                } else {
                                    this.el.nativeElement.nextElementSibling.style.color = 'red';
                                    this.el.nativeElement.nextElementSibling.innerText = this.abstractControl.errors[ss].message;
                                }
                            }
                        }
                    } else if (this.el.nativeElement.nextElementSibling != null) {
                        this.el.nativeElement.nextElementSibling.style.color = 'green';
                        this.el.nativeElement.nextElementSibling.innerText = '';
                    }
                }
            }
        }
    }
}
