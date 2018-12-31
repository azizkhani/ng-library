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
    declarations: [],
    entryComponents: [],
    providers: [
        GroupService,
        GroupRouteResolver,
        GroupActionTreePopupService
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupModule {
}
