/**
 * @H.RASOULI
 */
/**
 * Sample:
 * <select name="CONTROLE_NAME" [(ngModel)]="YOUR_MODEL" bhComboSeries from="XX" to= "YY"  step="ZZ"></select>
 */
import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[bhComboSeries]'
})

export class ComboSeriesDirective implements OnInit {
    @Input() from = 0;
    @Input() to = 0;
    @Input() step = 1;
    numbers: any[];
    range = (start: number, stop: number, step: number) =>
        Array.from({length: ((this.to - this.from) + 1) / step}, (_, i) => Number(start) + (i * step));

    constructor(public el: ElementRef) {
    }

    ngOnInit() {
        this.numbers = this.range(this.from, this.to, this.step);
        let nativeHtml = '';
        for (let item of this.numbers) {
            nativeHtml += '<option value=' + item + '>' + item + '</option>';
        }
        this.el.nativeElement.innerHTML = nativeHtml;
    }
}
