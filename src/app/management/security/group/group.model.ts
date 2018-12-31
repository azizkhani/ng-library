/*
*
*    @ AH.GHORAB
*
*/
import {BaseEntity} from '../../../shared/baseEntity/baseEntity.model';

export class Group extends BaseEntity<number> {
    constructor(
        public groupName?: string,
        public systemTopic?: string,
        public systemId?: number
    ) {
        super();
        this.systemTopic = '';
        this.groupName = '';
        this.systemId = null;
        this.id = -1;
    }
}
