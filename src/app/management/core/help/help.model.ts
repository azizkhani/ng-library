import {BaseEntity} from '../../../shared/baseEntity/baseEntity.model';

export class SystemInformation extends BaseEntity<number> {
    constructor(
        public code?: string,
        public topic?: string,
        public secondTopic?: string,
        public fullTopic?: string,
        public description?: string,
        public lock?: boolean,
        public active?: boolean,
        public isDefault?: boolean,
    ) {
        super();
        this.topic = '';
        this.secondTopic = '';
        this.fullTopic = '';
        this.description = '';
        this.code = '';
        this.active = true;
        this.lock = false;
        this.isDefault = false;
    }
}


export class Help extends BaseEntity<number> {
    constructor(
        public title?: string,
        public fileCode?: string,
        public fileName?: string,
        public backgroundImage?: boolean,
        public systemInformation?: SystemInformation
    ) {
        super();
        this.title = '';
        this.fileCode = '';
        this.fileName = '';
        this.backgroundImage = true;
        this.systemInformation = null;
    }
}











