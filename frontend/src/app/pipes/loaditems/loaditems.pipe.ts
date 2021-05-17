import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loaditems'
})
export class LoaditemsPipe implements PipeTransform {

  transform(value: [], limit: number,start?: number,end?: number){
    if (value.length > limit){
      return value.slice(start,end);
    } else{
      return value
    }
  }
}
