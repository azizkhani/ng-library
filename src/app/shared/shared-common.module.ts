/**
 * @ H.RASOULI
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgJhipsterModule} from 'ng-jhipster';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BsDropdownModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TreeModule} from 'ng2-tree';
import {NgSelectModule} from '@ng-select/ng-select';
import {SmartadminWidgetsModule} from './utils/widgets/smartadmin-widgets.module';
import {BhValidationModule} from './directives/validation';
import {KeysPipe} from './utils/pipes/keys/keys.pipe';
import {SmartadminFormsModule} from './forms/smartadmin-forms.module';
import {UtilsModule} from './utils/saUtils';
import {BhPipesModule} from './pipes/pipes.module';
import {BHFileUploadModule} from './components/fileUpload';
import { BH_COMPONENTS } from './components/bh-components';
import { BH_DIRECTIVES } from './directives/bh-directives';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        UtilsModule,
        SmartadminWidgetsModule,
        BhValidationModule,
        NgJhipsterModule,
        NgbModule,
        TabsModule.forRoot(),
        ProgressbarModule.forRoot(),
        BsDropdownModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        SmartadminFormsModule,
        BHFileUploadModule,
        BhPipesModule,
        TreeModule,
        DpDatePickerModule,
        NgSelectModule,
    ],
    declarations: [
        KeysPipe,
        ...BH_DIRECTIVES,
        ...BH_COMPONENTS,
    ],
    providers: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        UtilsModule,
        SmartadminWidgetsModule,
        BhValidationModule,
        NgJhipsterModule,
        NgbModule,
        TooltipModule,
        TabsModule,
        BHFileUploadModule,
        KeysPipe,
        BhPipesModule,
        TreeModule,
        NgSelectModule,
        ...BH_DIRECTIVES,
        ...BH_COMPONENTS,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BhSharedCommonModule {
}
