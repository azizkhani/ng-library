/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login.component';
import {UserLoginStatusGuard} from './UserLoginStatusGuard';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [UserLoginStatusGuard],
        runGuardsAndResolvers: 'always'
    }
];

export const LoginRoute: ModuleWithProviders = RouterModule.forChild(LoginRoutes);
