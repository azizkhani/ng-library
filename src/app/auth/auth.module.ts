/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRoute} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {ChangePasswordModule} from './changePassword';
import {LoginModule} from './login';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthRoute,
        ChangePasswordModule,
        LoginModule
    ],
    declarations: [
        AuthComponent
    ],
    providers: [],
    exports: [],
})
export class AuthModule {

}
