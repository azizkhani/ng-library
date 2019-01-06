/*
*
*    @ AH.GHORAB / H.RASOULI
*
*/
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {BhSharedCommonModule} from '../../../shared/shared-common.module';
import {OrganizationStructureRoute} from './organizationStructure.route';
import {OrganizationStructureService} from './organizationStructure.service';

import {OrganizationStructurePopupService} from './organizationStructure-popup.service';
import {OrganizationStrictureRouteResolver} from './organizationStructure-route.resolver';
import {OrganizationStructureModalPopupService} from './popupModal/organizationStructureModal-popup.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BhSharedCommonModule,
        OrganizationStructureRoute
    ],
    providers: [
        OrganizationStructureService,
        OrganizationStructurePopupService,
        OrganizationStrictureRouteResolver,
        OrganizationStructureModalPopupService
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OraganizationStructureModule {

}
