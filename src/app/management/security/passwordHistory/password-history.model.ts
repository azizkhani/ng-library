/*
*
*    @ h.rasouli
*
*/

export class PasswordHistory {
    constructor(
        public userId: number,
        public passwordDate: string,
        public newPassword: string,
        public oldPassword: string,
        public userFirstName: string,
        public userLastName: string,
        public passwordSolarDate: string,
        public userName: string,
    ) {
    }
}
