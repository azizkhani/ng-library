/**
 *
 *    @ AH.GHORAB/ H.RASOULI
 *
 */
import {Routes} from '@angular/router';
import {BhMainComponent} from './layouts/main';
import {UserRouteAccessService} from './shared/auth';
import {ReauthenticateGaurd} from './shared/auth/reauthentication';
import {HomeRoutes} from './home';
import {NavigationComponent} from './layouts/navigation/navigation.component';

export const NgBaharanRoute: Routes = [
    {
        path: '',
        component: BhMainComponent,
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [UserRouteAccessService, ReauthenticateGaurd],
        runGuardsAndResolvers: 'always',
        children: [
            ...HomeRoutes,
            // {
            //     path: 'home',
            //     loadChildren: './home/home.module#BhHomeModule',
            //     data: {
            //         pageTitle: 'خانه',
            //         reuseRouteKey: '/home/home',
            //     },
            // },
            // {
            //     path: 'system',
            //     loadChildren: './management/system.module#BhSystemModule',
            //     data: {
            //         reuseRouteKey: '/system',
            //         pageTitle: 'مدیریت سیستم'
            //     }
            // }
        ],
    },
    {
        path: '',
        component: NavigationComponent,
        outlet: 'navbar'
    }
];
