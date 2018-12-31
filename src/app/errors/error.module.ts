import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ErrorRoutes} from './error-route';
import {BlockIpErrorComponent} from './blockIp-error';
import {NotAccessComponent} from './not-access';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ErrorRoutes
    ],
    declarations: [
        BlockIpErrorComponent,
        NotAccessComponent
    ],
    providers: [
    ],
    exports: [
    ]
})
export class BhErrorModule {
}
