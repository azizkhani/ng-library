/*
*
*    @ AH.GHORAB
*    Edited: H.Rasouli
*
*/
export class UserHistory {
    constructor(
        public  userName?: string,
        public  personelIamgeCode?: string,
        public  firstName?: string,
        public  lastName?: string,
        public  personCode?: string,
        public  loginDate?: string,
        public  loginSolarDate?: string,
        public  ip?: string,
        public  phone?: string,
        public  pereviousIp?: string,
        public  personelId?: number,
    ) {
    }
}
