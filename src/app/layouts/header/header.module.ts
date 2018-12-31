/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {PopoverModule} from 'ngx-popover';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';

import {CollapseMenuComponent} from './collapse-menu';
import {RecentProjectsComponent} from './recent-projects';
import {FullScreenComponent} from './full-screen';
import {ActivitiesComponent} from './activities';
import {HeaderComponent} from './header.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {LogoutComponent} from './logout.component';
import {ActivitiesService} from './activities/activities.service';
import {ChatComponent, ChatService} from './chat';
import {BhSharedCommonModule} from '../../shared';

/**
 * TODO: in ghesmat baz negari beshe
 */
const stompConfig: StompConfig = {
    /**
     * TODO: chera url in shekli gozashte shode?????
     */
    url: 'http://localhost:8087/rest/websocket/chat',
    headers: {},
    heartbeat_in: 0,
    heartbeat_out: 20000,
    reconnect_delay: 5000,
    debug: true
};

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BsDropdownModule,
        PopoverModule,
        BhSharedCommonModule
    ],
    declarations: [
        RecentProjectsComponent,
        FullScreenComponent,
        CollapseMenuComponent,
        ActivitiesComponent,
        LogoutComponent,
        HeaderComponent,
        ChatComponent
    ],
    exports: [
        HeaderComponent,
    ],
    providers: [
        ActivitiesService,
        ChatService,
        StompService,
        {
            provide: StompConfig,
            useValue: stompConfig
        }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule {
}
