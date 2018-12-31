import {BaseEntity} from '../../shared/baseEntity';


export class PowerModel extends BaseEntity<number> {
    constructor(
        public userName?: string,
        public ip?: string,
        public normalMessage?: string,
        public successOrFail?: boolean,
        public status?: string,
        public priority?: number,
        public createdShamsi?: string,
        public entityClass?: string,
        public entityId?: string,
        public seen?: boolean,
    ) {
        super();

    }
}
