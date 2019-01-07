/**
 *
 *    @ AH.GHORAB/ H.RASOULI
 *
 */
import { Routes } from '@angular/router';
import { BhMainComponent } from './layouts/main';
import { UserRouteAccessService } from './shared/auth';
import { ReauthenticateGaurd } from './shared/auth/reauthentication';
import { HomeRoutes } from './home';

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
        ],
    }
];
