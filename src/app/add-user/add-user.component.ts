import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Servicies/AccountService';
import { SignUp } from '../Models/SignUp';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
name!:string
dob!:Date
email!:string
password!:string

constructor(private accountService:AccountService){
 
}

save(){
  var user=new SignUp();
  user.name=this.name
  user.dob=this.dob
  user.password=this.password
  user.email=this.email
  this.accountService.CreateAccount(user).subscribe({
    next:date=>{
      
      console.log("Success")
    },
    error:err=>{
      console.log("Error")
    }
  })
}

}
