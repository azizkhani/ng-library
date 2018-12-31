import {Pipe, PipeTransform} from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;


@Pipe({
    name: 'moment'
})
export class MomentPipe implements PipeTransform {

    transform(value: any, format?: any): any {
        return moment(value).format(format);
    }

}
