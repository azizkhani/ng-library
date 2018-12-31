/**
 *
 *    @ AH.GHORAB /EDITED: H.RASOULI
 *
 */
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    /*{
        path: 'action',
        loadChildren: './security/action/action.module#ActionModule',
        data: {
            pageTitle: 'لیست فعالیت ها',
            authorities: ['ROLE_USER']
        }
    }
    {
        path: 'passwordHistory',
        loadChildren: './security/passwordHistory/password-history.module#PasswordHistoryModule',
        data: {
            pageTitle: 'تاریخچه تغییر پسورد',
            authorities: ['ROLE_USER']
        },
    },
    {
        path: 'organization',
        loadChildren: './security/organizationStructure/organizationStructure.module#OraganizationStructureModule',
        data: {
            pageTitle: 'سازمان',
            authorities: ['ROLE_USER']
        },
    },
    {
        path: 'blockIp',
        component: BlockIpComponent,
        data: {}
    },
    {
        path: 'blockIp/addNewIp',
        component: AddNewIpComponent,
        data: {}
    },
    {
        path: 'loginhistory',
        component: LoginAndLogoutHistoryComponent,
        data: {}
    },
     {
        path: 'handAuditing',
        component: HandAuditingComponent,
        data: {}
    },
    {
        path: 'power',
        component: PowerComponent,
        data: {}
    }*/
];

export const SystemRoute: ModuleWithProviders = RouterModule.forChild(routes);






