import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({

    selector: 'sa-widget',
    template: `
        <div id="{{widgetId}}" class="jarviswidget"

        >
            <ng-content></ng-content>
        </div>`
})
export class WidgetComponent implements OnInit, AfterViewInit {
    public widgetId: string;

    @Input() public name: string;
    @Input() public colorbutton = true;
    @Input() public editbutton = true;
    @Input() public togglebutton = true;
    @Input() public deletebutton = true;
    @Input() public fullscreenbutton = true;
    @Input() public custombutton = false;
    @Input() public collapsed = false;
    @Input() public sortable = true;
    @Input() public hidden = false;
    @Input() public color: string;
    @Input() public load = false;
    @Input() public refresh = false;


    static counter = 0;

    constructor(public el: ElementRef, private router: Router) {

    }

    ngOnInit() {
        this.widgetId = this.genId();


        let widget = this.el.nativeElement.children[0];

        if (this.sortable) {
            widget.className += ' jarviswidget-sortable';
        }

        if (this.color) {
            widget.className += (' jarviswidget-color-' + this.color);
        }

        ['colorbutton',
            'editbutton',
            'togglebutton',
            'deletebutton',
            'fullscreenbutton',
            'custombutton',
            'sortable'
        ].forEach((option) => {
            if (!this[option]) {
                widget.setAttribute('data-widget-' + option, 'false');
            }
        });

        [
            'hidden',
            'collapsed'
        ].forEach((option) => {
            if (this[option]) {
                widget.setAttribute('data-widget-' + option, 'true');
            }
        });
    }

    private genId() {
        if (this.name) {
            return this.name;
        } else {
            let heading = this.el.nativeElement.querySelector('header h2');
            let id = heading ? heading.textContent.trim() : 'jarviswidget-' + WidgetComponent.counter++;
            id = id.toLowerCase().replace(/\W+/gm, '-');

            let url = this.router.url.substr(1).replace(/\//g, '-');
            id = url + '--' + id;

            return id;
        }

    }

    ngAfterViewInit(): any {
        const $widget = $(this.el.nativeElement);

        if (this.editbutton) {
            $widget.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');
        }

        const isFiller = $widget.hasClass('sa-fx-col');

        if ($widget.attr('class')) {
            $widget.find('.jarviswidget').addClass($widget.attr('class'));
            $widget.attr('class', '');
        }

        if (isFiller) {
            $widget.attr('class', 'sa-fx-col');
        }
    }
}
