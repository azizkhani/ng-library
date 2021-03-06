/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './logout.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PopoverModule } from 'ngx-popover';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        PopoverModule,
        TabsModule.forRoot(),
    ],
    declarations: [
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
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule {
}
