/*
 *    @ AH.GHORAB
 */
import {ComponentRef} from '@angular/core';
import {IframeComponent} from '../../shared/components/iframe';

export class NavigationMenuItem {
    constructor(public id?: number,
                public topic?: string,
                public existsChild?: boolean,
                public menuLayoutStateTitle?: string,
                public attrMap?: any,
                public icon?: string,
                public childs?: NavigationMenuItem[],
                public isEnable?: boolean,
                public isBookmark?: boolean,
                public isOpen?: boolean,
                public isShowing?: boolean,
                public componentRef?: ComponentRef<IframeComponent>) {
        this.id = 1;
        this.topic = '';
        this.existsChild = false;
        this.menuLayoutStateTitle = '';
        this.attrMap = {};
        this.icon = '';
        this.childs = [];
        this.isEnable = false;
        this.isBookmark = false;
        this.isOpen = false;
        this.isShowing = false;
        this.componentRef = null;

    }
}

