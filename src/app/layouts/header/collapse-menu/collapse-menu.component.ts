import {Component} from '@angular/core';
import {LayoutService} from '../../layout.service';

@Component({
    selector: 'sa-collapse-menu',
    templateUrl: './collapse-menu.component.html'
})
export class CollapseMenuComponent {

    constructor(private layoutService: LayoutService) {

    }

    onToggle() {
        this.layoutService.onCollapseMenu();
    }
}
