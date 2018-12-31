/**
 * @ M.AMERY
 */
export class GridSearchModel {
    public actionId: number;
    public systemId: number;
    public isActionWithoutSystem: boolean;
    public title: string;
    public actionTitle: string;

    constructor() {
        this.reset();
    }

    reset() {
        this.actionId = -1;
        this.systemId = -1;
        this.isActionWithoutSystem = false;
        this.title = '';
        this.actionTitle = '';
    }
}
