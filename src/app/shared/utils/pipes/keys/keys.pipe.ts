import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'keys',
    pure: false
})
export class KeysPipe implements PipeTransform {
    transform(map: Map<number, string>): any {
        let keys: any[] = [];
        map.forEach((val: string, key: number) => {
            keys.push({key: key, value: val});
        });
        return keys;
    }
}
