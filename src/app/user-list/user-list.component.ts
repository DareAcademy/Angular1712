import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Servicies/AccountService';
import { UserDTO } from '../Models/UserDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  liUsers!:UserDTO[]
  constructor(private accountService:AccountService,private router:Router){}
  ngOnInit(): void {
    this.accountService.UserList().subscribe({
      next:data=>{
        debugger
        this.liUsers=data
      },
      error:err=>{
        console.log("error")
      }
    })
  }

  AddRole(id:string){
    this.router.navigate(['/dashboard/UserRole'],{queryParams:{Id:id}})
  }

}
