/**
 * @H.RASOULI
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppState } from './app.service';
import { AuthModule } from './auth';
import { BHModuleConfig } from './config';
import { BhErrorModule } from './errors';
import { BhHomeModule } from './home';
import { BhLayoutModule } from './layouts/layout.module';
import { BhSystemModule } from './management/system.module';
import { BhSharedModule } from './shared/shared.module';
import { BHConfigService } from './config.service';

export * from './';
const APP_PROVIDERS = [
  AppState
];

@NgModule({
  imports: [
    BrowserModule,
    BhSharedModule.forRoot(),
    AuthModule,
    BhHomeModule,
    BhLayoutModule,
    BhSystemModule,
    BhErrorModule
  ],
  declarations: [AppComponent],
  exports: [],
  bootstrap: [AppComponent]
})
export class BhAppModule {
  static forRoot(moduleConfig: BHModuleConfig): ModuleWithProviders {
    return {
      ngModule: BhAppModule,
      providers: [
        { provide: BHModuleConfig, useValue: moduleConfig },
        { provide: BHConfigService, useClass: BHConfigService, deps: [BHModuleConfig] }

      ]
    };
  }
}
