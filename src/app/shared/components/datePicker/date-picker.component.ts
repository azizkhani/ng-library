/**
 * @ H.RASOULI
 */
/**
 * Sample:
 * <bh-date-picker
 *    name="CONTROLNAME"
 *    [(ngModel)]="YOURMODEL">
 * </bh-date-picker>
 *
 * @Inputs
 * defaultDate = '1397/08/13'
 * maxCurrentDate = true/false
 *
 */
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as moment_ from 'jalali-moment';
const moment = moment_;
@Component({
    selector: 'bh-date-picker',
    template:
        `
        <div class="bh-dp-date-picker">
            <dp-date-picker
                #datepicker
                dir="rtl"
                name="nameParam"
                mode="day"
                [(ngModel)]="dateModel"
                [config]="datePickerConfig"
                (ngModelChange)="onChange()"
                theme="dp-material">
            </dp-date-picker>
        </div>
        `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: BhDatePickerComponent,
            multi: true,
        }
    ],
    styles: [':host {  display: block;  height: auto; height: 30px; border-radius:0 3px 3px 0}']
})
export class BhDatePickerComponent implements ControlValueAccessor, OnInit {

    @ViewChild('datepicker') datepicker: ElementRef;
    dateModel: any;

    datePickerConfig = {
        drops: 'down',
        format: 'jYYYY/jMM/jDD',
        max: undefined
    };

    @Input()
    maxCurrentDate: Boolean = false;

    @Input()
    set defaultDate(value: any) {
        if (value === '') {
            this.dateModel = moment().locale('fa');
        } else if (value !== '' && value !== null && value !== undefined) {
            this.dateModel = moment.from(value, 'fa', 'YYYY/MM/DD');
        }
    }

    constructor() {
    }

    ngOnInit(): void {
        if (this.maxCurrentDate) {
            this.datePickerConfig.max = moment();
        }
    }

    onModelChange: Function = () => {
    }

    writeValue(value: any): void {
        this.dateModel = moment.from(value, 'fa', 'YYYY/MM/DD');;
    }

    registerOnChange(fn: any): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: any): void {
        return;
    }

    onChange() {
        if (this.dateModel instanceof moment) {
            this.dateModel = this.dateModel.format('YYYY/MM/DD');
        } else if (this.dateModel instanceof Object) {
            this.dateModel = moment().locale('fa').format('YYYY/MM/DD');
        } else if (this.dateModel === undefined) {
            this.dateModel = '';
        }
        this.onModelChange(this.dateModel);
    }
}
