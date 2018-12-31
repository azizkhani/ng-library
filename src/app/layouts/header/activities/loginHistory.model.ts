/*
*
*    @ AH.GHORAB
*
*/

export class LoginHistory {
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
    }
}
