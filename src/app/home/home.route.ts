/*
*
*    @ AH.GHORAB
*
*/
import {Routes} from '@angular/router';

import {HomeComponent} from './home.component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
            pageTitle: 'خانه',
            reuseRouteKey: '/home/home',
        }
    }
];
//export const HomeRoute: ModuleWithProviders = RouterModule.forChild(HomeRoutes);
