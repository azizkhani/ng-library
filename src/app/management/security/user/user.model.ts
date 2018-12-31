/*
 *
 * Created By BH-Angular 4 Generator
 * @ A.Azizkhani / AH.Ghorab
 * 8-9-2017
 *
 */
import {BaseEntity} from '../../../shared/baseEntity/baseEntity.model';

export class User extends BaseEntity<number> {
    constructor(
        public firstName?: string,
        public lastName?: string,
        public fullName?: string,
        public userName?: string,
        public passWord?: string,
        public email?: string,
        public isActive?: boolean,
        public visitedCount?: number,
        public lastVisitDate?: string,
        public personelId?: number,
        public personelImageCode?: string,
        public personelPowerTitle?: string,
        public personelPowerFullTitle?: string,
        public personelPostTitle?: string,
        public isEnabled?: boolean,
        public isOnline?: boolean,
        public passwordCredit?: string,
        public userCredit?: string,
        public personCode?: string,
        public classificationId?: number,
        public classificationTopic?: string,
        public personelPowerId?: number,
        public personelPowerCode?: string,
        public personelPowerHierarchiCode?: string,
        public lock?: boolean,
        public personelWorkPhone?: string,
        public personelCellphone?: string,
    ) {
        super();
    }
}
