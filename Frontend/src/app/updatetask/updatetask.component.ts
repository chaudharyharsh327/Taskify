import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { TaskserviceService } from '../taskservice.service';

import { Location } from '@angular/common';
@Component({
  selector: 'app-updatetask',
  imports: [CommonModule,FormsModule],
  templateUrl: './updatetask.component.html',
  styleUrl: './updatetask.component.css'
})
export class UpdatetaskComponent {
        tid !: number;
        tobj:Task = new Task();
      

    constructor(private router :ActivatedRoute,private taskService : TaskserviceService,private location :Location){}
    ngOnInit(){
      this.tid = this.router.snapshot.params['id'];
      
      
    }
    onSubmit(){
      
      this.tobj.taskid = this.tid;  
    console.log("Updating Task:", this.tobj); 

    this.taskService.updateTask(this.tid, this.tobj).subscribe(
        data => {
            console.log("Success", data);
            this.location.back();
        },
        error => {
            console.error("Error occurred:", error);
        }
    );
    }
}
