import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';
import {SmartadminInputModule} from './input/smartadmin-input.module';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [],
    exports: [
        SmartadminInputModule,
    ]

})
export class SmartadminFormsModule {
}
