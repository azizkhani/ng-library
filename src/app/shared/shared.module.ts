/**
 *
 *    @ AH.GHORAB,H.RASOULI
 *
 */

import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { BhSharedCommonModule } from './shared-common.module';
import { BhSharedLibsModule } from './shared-lib.module';

@NgModule({
    imports: [
        BhSharedLibsModule,
        BhSharedCommonModule,
    ],
    providers: [
    ],
    exports: [
        BhSharedCommonModule,
    ]
})
export class BhSharedModule {
}
