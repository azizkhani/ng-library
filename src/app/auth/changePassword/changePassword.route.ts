/**
 *    @ M.AMERY
 *
 */
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChangePasswordComponent} from './changePassword.component';

const ChangePasswordRoutes: Routes = [
    {
        path: 'changePassword',
        component: ChangePasswordComponent
    },
];

export const ChangePasswordRoute: ModuleWithProviders = RouterModule.forChild(ChangePasswordRoutes);
