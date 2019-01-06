/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SystemComponent } from './system.component';
import { SystemRoute } from './system-routing.module';
import { BhSharedCommonModule } from '../shared';

@NgModule({
    imports: [
        BhSharedCommonModule,
        SystemRoute,
    ],
    declarations: [
        SystemComponent,
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BhSystemModule {
}
