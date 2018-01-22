import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class TaskService {

  constructor() { }


  public taskdetails = new Subject<any>();
   taskvalue = this.taskdetails.asObservable();
   addOrder(object)
   {
     this.taskdetails.next(object);
     console.log(object);
   }

}
