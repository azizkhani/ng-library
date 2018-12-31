export class UserSeen {
    constructor(
        public userId?: number,
        public seenCount?: number,
        public fullName?: string,
        public personelImageCode?: string
    ) {
        this.userId = null;
        this.seenCount = 0;
        this.fullName = '';
        this.personelImageCode = '';
    }
}

