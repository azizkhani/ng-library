import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileInputComponent} from './file-input/file-input.component';
import {OnOffSwitchModule} from './on-off-switch/on-off-switch.module';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FileInputComponent,
    ],
    exports: [
        FileInputComponent,
        OnOffSwitchModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmartadminInputModule {
}
