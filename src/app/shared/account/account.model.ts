/*
*
*    @ AH.GHORAB
*
*/
import {BaseEntity} from '../baseEntity';

export class Account extends BaseEntity<number> {
    constructor(
        public firstName?: number,
        public lastName?: string,
        public fullName?: string,
        public userName?: string,
        public passWord?: string[],
        public email?: string[],
        public isActive?: boolean,
        public visitedCount?: number,
        public lastVisitDate?: any,
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
        public authorities?: any[]
    ) {
        super();
    }
}

