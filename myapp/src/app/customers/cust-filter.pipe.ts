import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './model/customer';

@Pipe({
  name: 'custFilter'
})
export class CustFilterPipe implements PipeTransform {

  transform(input: Array<Customer>, searchKey: string):Array<Customer {
    if(!searchKey)
    {
      return input;
    }
    else{
      return input.filter(function(item){
        return (item.id.toString()==searchKey
        || item.name.includes(searchKey)
        || item.location.includes(searchKey));
      });
    }
  }

}
