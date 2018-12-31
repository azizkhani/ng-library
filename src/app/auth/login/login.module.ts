/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import {UserLoginStatusGuard} from './UserLoginStatusGuard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        UserLoginStatusGuard
    ],
    exports: []
})
export class LoginModule {
}
