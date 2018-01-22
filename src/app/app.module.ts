import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskService} from './task.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskdetailComponent,
    TasklistComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
