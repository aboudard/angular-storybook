import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre',
  pure: true
})
export class FiltrePipe implements PipeTransform {

    transform(items: any[], start: boolean, exact: boolean, filter?: any): any {
        // clean undefined object properties
        Object.keys(filter).forEach(key => !filter[key] && delete filter[key]);

        return this.checkComplexType(items, filter, start, exact);
    }

    private checkComplexType(values, filter, start, exact): any {
        if (!values || !filter || Object.entries(filter).length === 0) {
            return values;
        }
        const result = [];

        // find in all records
        values.forEach(row => {
            let match = false;
            // find in all filters in the object of filters
            for (const [key, value] of Object.entries(filter)) {
                match = this.checkValue(row, key, value, start, exact);
                if (!match) {
                    return false;
                }
            }
            if (match) {
                result.push(row); // add row in return
            }
        });

        return result;
    }

    private checkValue(item, key, value, start, exact): boolean {
        if (!item || typeof item[key] === 'undefined' || !key || !value || value === '') {
            return true;
        }
        const itemVal = item[key].toString().toLowerCase();
        const valueVal = value.toString().toLowerCase();
        if (exact) {
          return itemVal === valueVal;
        } else {
          const expectedVal = start ? 0 : -1;
          return start ? itemVal.indexOf(valueVal) === expectedVal : itemVal.indexOf(valueVal) !== expectedVal;
        }

    }

}
