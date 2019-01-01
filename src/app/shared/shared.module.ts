/**
 *
 *    @ AH.GHORAB,H.RASOULI
 *
 */

import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { BhSharedLibsModule, BhSharedCommonModule } from '.';

@NgModule({
    imports: [
        BhSharedLibsModule,
        BhSharedCommonModule,
    ],
    declarations: [
    ],
    exports: [
        BhSharedCommonModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BhSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BhSharedModule
        };
    }
}
