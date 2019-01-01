/**
 * @ H.RASOULI
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SmartadminWidgetsModule } from './utils/widgets/smartadmin-widgets.module';
import { BhValidationModule } from './directives/validation';
import { KeysPipe } from './utils/pipes/keys/keys.pipe';
import { SmartadminFormsModule } from './forms/smartadmin-forms.module';
import { UtilsModule } from './utils/saUtils';
import { BhPipesModule } from './pipes/pipes.module';
import { BHFileUploadModule } from './components/fileUpload';
import { BH_COMPONENTS } from './components/bh-components';
import { BH_DIRECTIVES } from './directives/bh-directives';
import { BhSharedLibsModule } from './shared-lib.module';

@NgModule({
    imports: [
        BhSharedLibsModule,
        UtilsModule,
        SmartadminWidgetsModule,
        BhValidationModule,
        SmartadminFormsModule,
        BHFileUploadModule,
        BhPipesModule,
    ],
    declarations: [
        KeysPipe,
        ...BH_DIRECTIVES,
        ...BH_COMPONENTS,
    ],
    exports: [
        BhSharedLibsModule,
        UtilsModule,
        SmartadminWidgetsModule,
        BhValidationModule,
        BHFileUploadModule,
        KeysPipe,
        BhPipesModule,
        ...BH_DIRECTIVES,
        ...BH_COMPONENTS,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BhSharedCommonModule {
}
