/**
 *
 *    @ M.AMERY
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ChangePasswordComponent} from './changePassword.component';
import {ChangePasswordRoute} from './changePassword.route';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChangePasswordRoute
    ],
    declarations: [
        ChangePasswordComponent
    ],
    exports: []
})
export class ChangePasswordModule {
}
