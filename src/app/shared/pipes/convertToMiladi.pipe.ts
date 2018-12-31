import {Pipe, PipeTransform} from '@angular/core';
import * as moment_ from 'jalali-moment';
const moment = moment_;

@Pipe({
    name: 'jalalitomiladi'
})
export class JalaliPipeToMiladi implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value !== '') {
            const m = moment(value, 'jYYYY/jMM/jDD');
            return m.format('YYYY/MM/DD');
        } else {
            return '';
        }
    }
}
