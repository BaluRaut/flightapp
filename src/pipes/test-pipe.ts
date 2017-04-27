import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipes'
})
export class TestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
        console.log(args);

    return JSON.stringify(value);
  }

}