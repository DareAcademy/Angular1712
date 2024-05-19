import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../Servicies/AccountService';
import { UserRolesDTO } from '../Models/UserRolesDTO';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  userId!:string
  UserRoles!:UserRolesDTO[]
  constructor(private activatedRoute:ActivatedRoute,
    private accountService:AccountService){}

    ngOnInit(): void {
      debugger  
      if(this.activatedRoute.snapshot.queryParams["Id"] !=undefined){
          
        this.userId=this.activatedRoute.snapshot.queryParams["Id"]
        this.loadRoles()  

      }
    }

    loadRoles(){
      this.accountService.UserRole(this.userId).subscribe({
        next:data=>{
          debugger
          this.UserRoles=data
        },
        error:err=>{
          console.log("Error")
        }
      })
    }

    Update(userRoles:UserRolesDTO[]){
      this.accountService.UpdateRole(userRoles).subscribe({
        next:data=>{
          this.loadRoles()
          console.log("success")
        },
        error:err=>{
          console.log("error")
        }
      })
    }
}
