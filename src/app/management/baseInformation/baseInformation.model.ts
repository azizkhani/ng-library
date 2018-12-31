/*
*
*    @ AH.GHORAB
*
*/
export class BaseInformation {
    constructor(
        public topic?: string,
        public secondTopic?: string,
        public masterInformationTopic?: string,
        public parentTopic?: string,
        public description?: string,
        public id?: number,
        public masterInformationId?: number,
        public masterInformationCode?: number,
        public parentId?: number,
        public active?: boolean,
        public lock?: boolean
    ) {
    }
}
