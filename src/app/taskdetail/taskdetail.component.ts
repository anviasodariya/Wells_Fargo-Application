import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { TaskService} from '../task.service';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css'],

})
export class TaskdetailComponent implements OnInit {
 title:string;
 priority:string;
 status:string;
 date:string;
// description:string;
 object={"title":"","priority":"","status":"","date":""};
 @Output()okclick =new EventEmitter<any>();
 
  constructor(private taskservices:TaskService) { }

  ngOnInit() {
  }
  parent=[];
create(x,y,z,w)
{
   console.log(x,y,z,w);
  //  console.log(x);
  
var object={"title":this.title,"priority":this.priority,"status":this.status,"date":this.date};

console.log("hiiiiii");
this.okclick.emit(object);
this. taskservices.addOrder(object);
this.parent.push(this.title);
console.log("hii");

}
cancel()
{
  this.title="";
  this.priority="";
  this.status="";
  this.date="";
  
}
}
