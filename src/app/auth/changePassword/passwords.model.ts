/**
 *
 *    @ M.AMERY
 */
export class PasswordsModel {
    constructor(public oldPassword,
                public newPassword) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
}
