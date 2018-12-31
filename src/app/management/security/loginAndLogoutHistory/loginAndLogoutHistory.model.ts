import {BaseEntity} from '../../../shared/baseEntity/index';


export class LoginAndLogoutHistoryModel extends BaseEntity<number> {
    constructor(
        public userName?: string,
        public password?: string,
        public loginSolarDate?: string,
        public loginBrowser?: string,
        public loginOperatingSystem?: string,
        public loginBrowserVersion?: string,
        public loginResolution?: string,
        public ip?: string,
        public createdDateShamsi?: string,
        public id?: number,
        public success?: boolean,
        public active?: boolean,
        public login?: boolean,
        public loginDate?: string,
    ) {
        super();
    }
}
