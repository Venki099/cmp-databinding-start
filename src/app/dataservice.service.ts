import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 data = new Subject<any>();
  constructor() { }

  updateData(data:any){
    this.data.next(data)
  }
}
