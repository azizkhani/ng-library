/*
*
*    @ AH.GHORAB
*
*/
export abstract class BaseEntity<T> {
    constructor(
        public id?: T,
        public ip?: string,
        public version?: number,
        public createdDate?: string,
        public updatedDate?: string,
        public createdDateShamsi?: string,
        public updatedDateShamsi?: string
    ) {
        this.ip = '127.0.0.1';
    }
}
