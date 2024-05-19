import { Component } from '@angular/core';
import { AccountService } from '../Servicies/AccountService';
import { Role } from '../Models/Role';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent {
name!:string

constructor(private accountService:AccountService){}

save(){
  var role=new Role();
  role.name=this.name
this.accountService.AddRole(role).subscribe({
  next:data=>{
    console.log("Success")
  },
  error:err=>{
    console.log("error")
  }
})
}
}
