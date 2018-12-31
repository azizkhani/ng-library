/*
*
*    @ AH.GHORAB/H.RASOULI
*
*/
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {BhSharedCommonModule} from '../../../shared';
import {PersonelRoute} from './personel.route';
import {PersonelService} from './personel.service';
import {PersonelRouteResolver} from './personel-route.resolver';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BhSharedCommonModule,
        PersonelRoute
    ],
    declarations: [],
    entryComponents: [],
    providers: [
        PersonelService,
        PersonelRouteResolver
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonelModule {

}
