import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {BlockIpErrorComponent} from './blockIp-error/BlockIpError.component';
import {NotAccessComponent} from './not-access/not-access.component';


export const ErrorRoute: Routes = [
    {
        path: 'blockip',
        component: BlockIpErrorComponent,
        data: {
            pageTitle: 'IP خطای بلاک',
        }
    },
    {
        path: 'notaccess',
        component: NotAccessComponent,
        data: {
            pageTitle: 'خطای دسترسی غیر مجاز',
        }
    }
];
export const ErrorRoutes: ModuleWithProviders = RouterModule.forChild(ErrorRoute);
