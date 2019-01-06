/*
*
*    @ AH.GHORAB /
*
*/
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {GroupService} from './group.service';
import {GroupRouteResolver} from './group-route.resolver';
import {GroupRoute} from './group.route';
import {BhSharedCommonModule} from '../../../shared';
import {GroupActionTreePopupService} from './group-popup.service';

@NgModule({
    imports: [
        BhSharedCommonModule,
        GroupRoute
    ],
    providers: [
        GroupService,
        GroupRouteResolver,
        GroupActionTreePopupService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupModule {
}
