/**
 * @H.RASOULI
 */
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { Ng2Webstorage } from 'ngx-webstorage';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {
    AngularDefinerInterceptor,
    AuthExpiredInterceptor,
    ChangePasswordInterceptor,
    ErrorHandlerInterceptor
} from '../blocks/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule, ProgressbarModule, BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
import { TreeModule } from 'ng2-tree';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        NgJhipsterModule.forRoot({
            i18nEnabled: true,
            defaultI18nLang: 'en'
        }),
        Ng2Webstorage.forRoot({
            prefix: '',
            separator: '.'
        }),
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-left',
            preventDuplicates: true,
        }),
        TabsModule.forRoot(),
        ProgressbarModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        TreeModule,
        DpDatePickerModule,
        NgSelectModule,
    ],
    exports: [
        FormsModule,
        CommonModule,
        NgbModule,
        NgJhipsterModule,
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        TabsModule,
        ProgressbarModule,
        BsDropdownModule,
        TooltipModule,
        TreeModule,
        DpDatePickerModule,
        NgSelectModule,
    ]
})
export class BhSharedLibsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BhSharedLibsModule,
            providers: [
                LoadingBarHttpClientModule,
                LoadingBarRouterModule,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthExpiredInterceptor,
                    multi: true,
                    deps: [Injector]
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ErrorHandlerInterceptor,
                    multi: true,
                    deps: [Injector]
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AngularDefinerInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ChangePasswordInterceptor,
                    multi: true,
                    deps: [Injector]
                }
            ]
        };
    }
}

