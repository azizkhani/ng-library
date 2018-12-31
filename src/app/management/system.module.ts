/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SystemComponent } from './system.component';
import { SystemRoute } from './system-routing.module';
import { PowerService } from './power/power.service';
import { BlockIpService } from './security/blockIp/blockIp.service';
import { HandAuditingService } from './security/handAuditing/handAuditing.service';
import { LoginAndLogoutHistoryService } from './security/loginAndLogoutHistory/loginAndLogoutHistory.service';
import { BhSharedCommonModule } from '../shared/shared-common.module';

@NgModule({
    imports: [
        BhSharedCommonModule,
        SystemRoute,
    ],
    declarations: [
        SystemComponent,
    ],
    providers: [
        BlockIpService,
        HandAuditingService,
        LoginAndLogoutHistoryService,
        PowerService
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BhSystemModule {
}
