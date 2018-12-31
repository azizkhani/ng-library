import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'on-off-switch',
    template: `<div class="onoffswitch-container">
                    <span class="onoffswitch-title">{{title}}<ng-content></ng-content></span>
                    <span class="onoffswitch">
                    <input type="checkbox" class="onoffswitch-checkbox" [(ngModel)]="value" [checked]="value"
                           (ngModelChange)="onChange()"
                           id="{{widgetId}}"/>
                    <label class="onoffswitch-label" htmlFor="{{widgetId}}">
                      <span class="onoffswitch-inner" data-swchon-text=""
                            data-swchoff-text=""></span>
                        <span class="onoffswitch-switch"></span>
                    </label>
                  </span>
                </div>
                `,
})
export class OnOffSwitchComponent implements OnInit {

    static widgetsCounter = 0;

    @Input() title: string;

    @Input() model: boolean;
    @Output() modelChange = new EventEmitter();

    @Input() value: any;
    public widgetId;

    constructor() {
    }

    ngOnInit() {
         this.value = this.model;
         this.widgetId = 'on-off-switch' + OnOffSwitchComponent.widgetsCounter++;
    }

    onChange() {
         this.modelChange.emit(this.value);
    }


}
