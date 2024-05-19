import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignUp } from "../Models/SignUp";
import { Observable } from "rxjs";
import { Role } from "../Models/Role";
import { UserRolesDTO } from "../Models/UserRolesDTO";
import { SignInDTO } from "../Models/SignInDTO";

@Injectable()
export class AccountService{
    constructor(private http:HttpClient){}

    CreateAccount(user:SignUp):Observable<any>{
        debugger
    return this.http.post('http://localhost/Clinic1712Angular/api/Accounts/SignUp',user);
    }

    Login(signIn:SignInDTO):Observable<any>{
        debugger
        return this.http.post('http://localhost/Clinic1712Angular/api/Accounts/Login',signIn);
    }

    AddRole(role:Role):Observable<any>{
        return this.http.post('http://localhost/Clinic1712Angular/api/Accounts/AddRole',role);
    }

    UserList():Observable<any>{
        return this.http.get('http://localhost/Clinic1712Angular/api/Accounts/UserList');
    }

    UserRole(id:string):Observable<any>{
        debugger
        return this.http.get('http://localhost/Clinic1712Angular/api/Accounts/UserRole?UserId='+id);
    }

    UpdateRole(userRoles:UserRolesDTO[]):Observable<any>{
        debugger
        return this.http.post('http://localhost/Clinic1712Angular/api/Accounts/UpdateRole',userRoles);
    }
}