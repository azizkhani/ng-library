/*
*
*  Edited: H.Rasouli
* */

import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
    selector: 'sa-minify-menu',
    template: `<span class="minifyme" (click)="toggle()">
                    <i class="fa fa-arrow-circle-left hit"></i>
                </span>`,
})
export class MinifyMenuComponent {

    constructor(private layoutService: LayoutService) {
    }

    toggle() {
        this.layoutService.onMinifyMenu();
    }
}
