 import { Injectable, Pipe } from '@angular/core';


@Pipe({
  name: 'jsonformat'
})
@Injectable()

export class JsonFormat {
  transform(value, args) {
 
    //Count how many words were passed in
     console.log(value);
 
    return "gdgdfgdfgdgdfgfdgdg";
  }
}