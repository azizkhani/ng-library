/*
*
*    @ AH.GHORAB
*
*/
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginRoutes} from './login';

const routes: Routes = [

    // Its Ok if you dont write this line but i write it for complete url '/auth/login'
    // if i delete this line the url will be '/login'
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            // {
            //     path: 'login',
            //     loadChildren: './login/login.module#LoginModule'
            // }
            ...LoginRoutes
        ]
    }
];

export const AuthRoute: ModuleWithProviders = RouterModule.forChild(routes);
