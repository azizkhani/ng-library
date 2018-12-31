/*
 *
 * Created By BH-Angular 4 Generator
 * @ A.Azizkhani / AH.Ghorab / H.RASOULI
 * 8-9-2017
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UserService} from './user.service';
import {UserRouteResolver} from './user-route.resolver';
import {UserRoute} from './user.route';
import {BhSharedCommonModule} from '../../../shared/shared-common.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BhSharedCommonModule,
        UserRoute
    ],
    declarations: [],
    entryComponents: [],
    providers: [
        UserService,
        UserRouteResolver,
    ],
    exports: []
})
export class UserModule {
}
