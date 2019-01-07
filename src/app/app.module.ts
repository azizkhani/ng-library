/**
 * @H.RASOULI
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppState } from './app.service';
import { AuthModule } from './auth';
import { BHModuleConfig } from './config';
import { BHConfigService } from './config.service';
import { BhErrorModule } from './errors';
import { BhHomeModule } from './home';
import { BhLayoutModule } from './layouts/layout.module';
import { BhSystemModule } from './management/system.module';
import { BhSharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

export * from './';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BhSharedModule.forRoot(),
    AuthModule,
    BhHomeModule,
    BhLayoutModule,
    BhSystemModule,
    BhErrorModule
  ],
  exports: [],
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
