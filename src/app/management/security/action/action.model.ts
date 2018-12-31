/**
 * @ M.AMERY
 */
import {BaseEntity} from '../../../shared/baseEntity/index';

export class Action extends BaseEntity<number> {

    constructor(
        public title: string,
        public parentTitle: string,
        public src: string,
        public width: number,
        public height: number,
        public sortOrder: number,
        public enabled: boolean,
        public forceReAuthenticate: boolean,
        public path: string,
        public childCount: number) {
        super()
        this.id = -1;
        this.title = '';
        this.parentTitle = '';
        this.src = '';
        this.width = null;
        this.height = null;
        this.sortOrder = null;
        this.enabled = null;
        this.forceReAuthenticate = null;
        this.path = '';
        this.childCount = null;
    }
}
