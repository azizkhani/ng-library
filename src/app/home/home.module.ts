/**
 *
 *    @ AH.GHORAB /H.RASOULI
 *
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {BhSharedCommonModule} from '../shared/shared-common.module';
import {LoginInfoComponent} from './loginInfo-widget/loginInfo.component';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        BhSharedCommonModule,
    ],
    declarations: [
        HomeComponent,
        LoginInfoComponent,
    ],
    providers: [],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BhHomeModule {
}
