import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Task } from '../../task';
import { TaskserviceService } from '../../taskservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-taskcomponent',
  imports: [FormsModule,CommonModule],
  templateUrl: './taskcomponent.component.html',
  styleUrl: './taskcomponent.component.css'
})
export class TaskcomponentComponent {
  taskobj:Task=new Task();
  username !: string;
  constructor(private router :ActivatedRoute,private taskService:TaskserviceService,private router1:Router) {
    
  }
  ngOnInit()
  {
    this.username = this.router.snapshot.params['username'];
  }
  storeValue()
  {
    this.taskService.insertTask(this.taskobj,this.username).subscribe(data=>{
      
      // this.taskobj = new Task();
      this.router1.navigate(['view',this.username]);
    })
  }
}
