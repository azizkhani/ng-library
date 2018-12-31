/**
 * @H.RASOULI
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppState } from './app.service';
import { BhSharedModule } from './shared/shared.module';
import { BhLayoutModule } from './layouts/layout.module';
import { AuthModule } from './auth';
import { BhSharedCommonModule, BhSharedLibsModule } from './shared';
import { FormsModule } from '@angular/forms';
import { BhErrorModule } from './errors';
import { BhHomeModule } from './home';
import { BhSystemModule } from './management/system.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

export * from './';
const APP_PROVIDERS = [
  AppState
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    BhSharedModule,
    AuthModule,
    BhHomeModule,
    BhLayoutModule,
    BhSystemModule,
    BhErrorModule
  ],
  declarations: [AppComponent],
  providers: [
    APP_PROVIDERS,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class BhAppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BhAppModule,
      providers: [
        APP_PROVIDERS,
      ]
    };
  }
}
