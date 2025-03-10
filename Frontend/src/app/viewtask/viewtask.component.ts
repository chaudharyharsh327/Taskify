import { Component } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { TaskserviceService } from '../taskservice.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  imports: [CommonModule,FormsModule],
  templateUrl: './viewtask.component.html',
  styleUrl: './viewtask.component.css'
  
})
export class ViewtaskComponent {
  username !:string;
  tasks!:Task[];
  constructor(private router :ActivatedRoute,private taskService : TaskserviceService,private router1:Router){}
  ngOnInit(){
    this.username = this.router.snapshot.params['username'];
    
    this.taskService.getTaskList(this.username).subscribe(data=>{
      this.tasks = data;
    })
  }
  deletetask(id :number){
    this.taskService.deleteTask(id).subscribe(data=>{
      console.log(data);
      this.taskService.getTaskList(this.username).subscribe(data => {
        this.tasks = data;  
    });
      
    })
  }
  updatetask(id : number){
    this.router1.navigate(['updatetask',id]);
  }
  createtask(username : string){
    this.router1.navigate(['create',username]);
  }

}
