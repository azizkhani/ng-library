/**
 *
 *    @ H.Rasouli
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PasswordHistoryService} from './password-history.service';
import {PasswordHistoryRoute} from './password-history.route';
import {BhSharedCommonModule} from '../../../shared/index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BhSharedCommonModule,
        PasswordHistoryRoute
    ],
    providers: [
        PasswordHistoryService,
    ],
    exports: []
})
export class PasswordHistoryModule {
}
