import {NgModule} from '@angular/core';
import {MomentPipe} from './moment.pipe';
import {FieldFilterPipe} from './field-filter.pipe';
import {BodyService} from './body.service';
import {NotificationService} from './notification.service';
import {ToggleActiveDirective} from './toggle-active.directive';

@NgModule({
    declarations: [ToggleActiveDirective, MomentPipe, FieldFilterPipe],
    exports: [ToggleActiveDirective, MomentPipe, FieldFilterPipe],
    providers: [BodyService, NotificationService]
})
export class UtilsModule {
    static forRoot() {
        return {
            ngModule: UtilsModule,
            providers: [BodyService, NotificationService]
        };
    }
}
