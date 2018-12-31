import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BodyService {

    public $body: any;

    constructor() {
        // this.$body = $('body');
    }

    /**
     * TODO: unsued
     */
    addClass(className: string) {
        this.$body.addClass(className);
    }

    /**
     * TODO: unsued
     */
    removeClass(className: string) {
        this.$body.removeClass(className);
    }

    /**
     * TODO: unsued
     */
    toggleClass(className: string, state?: boolean) {
        this.$body.toggleClass(className, state);
    }
}
