/*
*
*    @ AH.GHORAB
*
*/
import {BaseEntity} from '../../../shared/baseEntity';

export class OrganizationStructureModel extends BaseEntity<number> {
    constructor(public title?: string,
                public fullTitle?: string,
                public code?: string,
                public telphone?: string,
                public kosarPhone?: string,
                public address?: string,
                public categoryId?: number,
                public categoryTopic?: string,
                public parentId?: number,
                public parentTitle?: string,
                public parentCode?: string,
                public quiddityId?: number,
                public quiddityTitle?: string,
                public proclamationNum?: string,
                public proclamationDate?: string,
                public proclaimer?: string,
                public virtual?: boolean,
                public hierarchiCode?: string,
                public updatedByFullName?: string,
                public createdByFullName?: string,
                public createdDate?: string,
                public updatedDate?: string,
                public createdDateShamsi?: string,
                public updatedDateShamsi?: string,
                public longitude?: string, // tole joghrafiyayi
                public latitude?: string// arze jpghrafiyayi
    ) {
        super();
    }
}



