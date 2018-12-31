import {BaseEntity} from '../../../shared/baseEntity/index';


export class BlockIpModel extends BaseEntity<number> {
    constructor(public personelId?: number,
                public personelTitle?: string,
                public evaluationTemplateHeaderId?: number,
                public evaluationTemplateHeaderTitle?: string,
                public powerId?: number,
                public firstName?: string,
                public lastName?: string,
                public lastUsername?: string,
                public powerTitle?: string,
                public evaluationStatus?: number,
                public evaluationStatusTitle?: string,
                public evaluationStatusPersianTitle?: string,
                public evaluationShamsiDate?: any,
                public evaluationTime?: string,
                public evaluationShamsiDateTime?: string,
                public blockedIp?: string,
                public personnelPowerId?: number,
                public personnelPowerTitle?: string,
                public blockDate?: Date,
                public percentLogistic?: number,
                public isChecked?: boolean,
                public unBlockDate?: string,
                public percentOperational?: number,
                public preparationStatus?: string) {
        super();
        this.personelId = null;
        this.isChecked = null;
        this.firstName = null;
        this.lastName = null;
        this.lastUsername = null;
        this.unBlockDate = null;
        this.blockDate = null;
        this.blockedIp = null;
        this.personelTitle = null;
        this.evaluationTemplateHeaderId = null;
        this.evaluationTemplateHeaderTitle = null;
        this.powerId = null;
        this.powerTitle = null;
        this.evaluationShamsiDateTime = '';
        this.evaluationTime = '';
        this.evaluationStatus = null;
        this.evaluationStatusTitle = null;
        this.evaluationStatusPersianTitle = null;
        this.id = -1;
        this.personnelPowerId = null;
        this.personnelPowerTitle = null;
        this.percentLogistic = null;
        this.percentOperational = null;
        this.preparationStatus = null;
    }
}
