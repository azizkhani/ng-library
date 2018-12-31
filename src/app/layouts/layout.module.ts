/**
 *
 * @ H.RASOULI : edited
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BsDropdownModule, TooltipModule} from 'ngx-bootstrap';

import {HeaderModule} from './header/header.module';
import {FooterComponent} from './footer/footer.component';
import {NavigationModule} from './navigation/navigation.module';
import {RibbonComponent} from './ribbon/ribbon.component';
import {BhMainComponent} from './main/main.component';
import {RouteBreadcrumbsComponent} from './ribbon/route-breadcrumbs.component';
import {LayoutService} from './layout.service';
import {NavigationService} from './navigation/navigation.service';
import {BhSharedCommonModule} from '../shared/shared-common.module';
import {LeftBarComponent} from './leftBar/leftBar.component';
import {FakeRouteComponent} from './main/FakeRoute.component';
import {LayoutRoute} from './layout.route';
import {IframeComponent} from '../shared/components/iframe';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        NavigationModule,
        FormsModule,
        RouterModule,
        TooltipModule,
        BsDropdownModule,
        BhSharedCommonModule,
        LayoutRoute
        /*SidebarModule.forRoot()*/
    ],
    declarations: [
        FooterComponent,
        RibbonComponent,
        RouteBreadcrumbsComponent,
        BhMainComponent,
        LeftBarComponent,
        FakeRouteComponent
    ],
    exports: [
        HeaderModule,
        NavigationModule,
        FooterComponent,
        RibbonComponent,
        FakeRouteComponent
    ],
    providers: [
        LayoutService,
        NavigationService
    ]
    ,
    entryComponents: [
        IframeComponent,
        FakeRouteComponent
    ]
})
export class BhLayoutModule {

}
