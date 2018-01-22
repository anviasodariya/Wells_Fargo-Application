import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  
  constructor() { }
list=[{ 'title': 'task1', 'priority': 'major','status':'todo','date':'2017/03/04'}];
  ngOnInit() {
  }
  today = Date.now();
  adddetailrow(e)
  {
    this.list.push(e);
  // this.fdetails.push(okclick);
    // console.log(e+"bye");
  }
  passtoform()

  {
    
  }

}
