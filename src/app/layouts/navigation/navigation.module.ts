/*
*
*    @ AH.GHORAB
*
*/
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {BigBreadcrumbsComponent} from './big-breadcrumbs.component';
import {NavigationService} from './navigation.service';
import {NavigationComponent} from './navigation.component';
import {MinifyMenuComponent} from './minify-menu.component';
import {SmartMenuDirective} from './smart-menu.directive';
import {NavigationMenuBuilderComponent} from './navigation-menu-builder.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavigationMenuBuilderComponent,
        BigBreadcrumbsComponent,
        MinifyMenuComponent,
        NavigationComponent,
        SmartMenuDirective,
    ],
    exports: [
        BigBreadcrumbsComponent,
        MinifyMenuComponent,
        NavigationComponent,
        SmartMenuDirective,
        NavigationMenuBuilderComponent
    ],
    providers: [NavigationService]
})
export class NavigationModule {
}
