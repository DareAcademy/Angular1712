import { Component } from '@angular/core';
import { AccountService } from '../Servicies/AccountService';
import { SignInDTO } from '../Models/SignInDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username!:string
password!:string
constructor(private accountService:AccountService,
            private router:Router){}

Login(){
  debugger
  var signIn=new SignInDTO();
  signIn.username=this.username
  signIn.password=this.password
this.accountService.Login(signIn).subscribe({
  next:data=>{
    debugger
    localStorage.setItem("SecurityKey",data.token)
    this.router.navigate(['/dashboard'])
    console.log("success")
  },
  error:err=>{
    console.log("error")
  }
})
}
}
