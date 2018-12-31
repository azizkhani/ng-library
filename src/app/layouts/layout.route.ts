/**
 *
 *    H.RASOULI
 *
 */
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NgBaharanRoute} from '../app.route';

export const routes: Routes = [
    ...NgBaharanRoute
];

export const LayoutRoute: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
