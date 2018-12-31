/**
 *    @ S.SEYFI
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JalaliPipeToMiladi} from './convertToMiladi.pipe';
import {JalaliPipeToShamsi} from './convertToShamsi.pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        JalaliPipeToMiladi,
        JalaliPipeToShamsi,
    ],
    providers: []
    ,
    exports: [
        JalaliPipeToMiladi,
        JalaliPipeToShamsi,
    ]

})
export class BhPipesModule {
    constructor() {
    }
}
