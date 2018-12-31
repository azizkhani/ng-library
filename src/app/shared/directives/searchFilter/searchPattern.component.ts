import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {Pattern} from './searchPattern.model';

@Component({
    selector: 'bh-search-pattern',
    template:
        `
            <select class="form-control"
                    bhSearchType="p"
            >
                <option *ngFor="let item of patterns"
                        [(value)]="item.id" [selected]="item.selected">
                    {{item.title}}
                </option>
            </select>
    `
})
export class BhSearchPatternComponent implements OnInit, AfterContentChecked {
    @Input() selectedPattern: number;
    patterns: Pattern[] = [];

    ngAfterContentChecked(): void {
    }

    ngOnInit(): void {
        this.patterns.push(new Pattern(1, 'برابر باشد', this.selectedPattern == 1));
        this.patterns.push(new Pattern(2, 'برابر نباشد', this.selectedPattern == 2));
        this.patterns.push(new Pattern(3, 'بیشتر از', this.selectedPattern == 3));
        this.patterns.push(new Pattern(4, 'کمتر از', this.selectedPattern == 4));
        this.patterns.push(new Pattern(5, 'بیشتر  یا برابر از', this.selectedPattern == 5));
        this.patterns.push(new Pattern(6, 'کمتر یا برابر از', this.selectedPattern == 6));
        this.patterns.push(new Pattern(7, 'شامل این مقدار', this.selectedPattern == 7));
        this.patterns.push(new Pattern(8, 'با این مقدار شروع شود', this.selectedPattern == 8));
        this.patterns.push(new Pattern(9, 'با این مقدار تمام شود', this.selectedPattern == 9));
        this.patterns.push(new Pattern(10, 'شامل این مقدار نباشد', this.selectedPattern == 10));
        this.patterns.push(new Pattern(11, 'با این مقدار شروع نشود', this.selectedPattern == 11));
        this.patterns.push(new Pattern(12, 'با این مقدار تمام نشود', this.selectedPattern == 12));
    }


}
