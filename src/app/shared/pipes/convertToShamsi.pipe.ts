import {Pipe, PipeTransform} from '@angular/core';
import * as moment_ from 'jalali-moment';
const moment = moment_;

@Pipe({
    name: 'jalalitoshamsi'
})
export class JalaliPipeToShamsi implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value !== '') {
            const m = moment(value, 'YYYY/MM/DD');
            return m.format('jYYYY/jMM/jDD');
        } else {
            return '';
        }
    }
}
