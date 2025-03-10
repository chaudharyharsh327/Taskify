import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../user';
import { UserserviceService } from '../../userservice.service';
import { Router } from '@angular/router';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

@Component({
  selector: 'app-createaccount',
  imports: [FormsModule,CommonModule],
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
         userobj : User = new User();
         constructor(private userService : UserserviceService,private router :Router){}
         ngOnInit(){}
         registeruser(){
          
          if (!this.userobj || !this.userobj.username || !this.userobj.password) {
            Toastify({
              text: "Username and Password are required!",
              duration: 2000, 
              gravity: "top", 
              position: "right", 
              backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
            }).showToast();
            console.log("Enter All Credentials")
            return;
         }
         this.userService.createUser(this.userobj).subscribe(data=>{
          
          
            console.log("Success");
            this.router.navigate(['login'])
          
         })
         }
         
        
        accountexists(){
          this.router.navigate(['login'])
        }

}
