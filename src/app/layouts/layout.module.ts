/**
 *
 * @ H.RASOULI : edited
 *
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { BhMainComponent } from './main/main.component';
import { RouteBreadcrumbsComponent } from './ribbon/route-breadcrumbs.component';
import { LeftBarComponent } from './leftBar/leftBar.component';
import { FakeRouteComponent } from './main/FakeRoute.component';
import { LayoutRoute } from './layout.route';
import { IframeComponent } from '../shared/components/iframe';
import { HeaderModule } from './header/header.module';
import { NavigationModule } from './navigation/navigation.module';
import { BhSharedCommonModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        NavigationModule,
        FormsModule,
        RouterModule,
        LayoutRoute,
        BhSharedCommonModule
    ],
    declarations: [
        FooterComponent,
        RibbonComponent,
        RouteBreadcrumbsComponent,
        BhMainComponent,
        LeftBarComponent,
        FakeRouteComponent
    ],
    entryComponents: [
        IframeComponent,
        FakeRouteComponent
    ]
})
export class BhLayoutModule {

}
