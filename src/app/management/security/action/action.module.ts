/**
 * @ M.AMERY
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActionRoute} from './action.route';
import {ActionService} from './action.service';
import {BhSharedCommonModule} from '../../../shared/index';
import {GroupService} from '../group';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BhSharedCommonModule,
        ActionRoute
    ],
    declarations: [],
    providers: [
        ActionService,
        GroupService
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionModule {
}
