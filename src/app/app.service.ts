import {Injectable} from '@angular/core';

export type InternalStateType = {
    [key: string]: any
};

@Injectable({
    providedIn: 'root'
})
export class AppState {
    _state: InternalStateType = {};

    constructor() {
    }

    get state() {
        return this._state = this._clone(this._state);
    }

    set state(value) {
        throw new Error('do not mutate the `.state` directly');
    }

    get(prop?: any) {
        const state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    }

    set(prop: string, value: any) {
        return this._state[prop] = value;
    }

    private _clone(object: InternalStateType) {
        return JSON.parse(JSON.stringify(object));
    }
}
