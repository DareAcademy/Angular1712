import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignUp } from "../Models/SignUp";
import { Observable } from "rxjs";
import { Role } from "../Models/Role";
import { UserRolesDTO } from "../Models/UserRolesDTO";
import { SignInDTO } from "../Models/SignInDTO";
import { environment } from "src/environments/environment.development";

@Injectable()
export class AccountService{
    baseUrl=''
    constructor(private http:HttpClient){
        this.baseUrl=environment.APIURL
    }

    CreateAccount(user:SignUp):Observable<any>{
        debugger
    return this.http.post(this.baseUrl+'/api/Accounts/SignUp',user);
    }

    Login(signIn:SignInDTO):Observable<any>{
        debugger
        return this.http.post(this.baseUrl+'/api/Accounts/Login',signIn);
    }

    AddRole(role:Role):Observable<any>{
        return this.http.post(this.baseUrl+'/api/Accounts/AddRole',role);
    }

    UserList():Observable<any>{
        return this.http.get(this.baseUrl+'/api/Accounts/UserList');
    }

    UserRole(id:string):Observable<any>{
        debugger
        return this.http.get(this.baseUrl+'/api/Accounts/UserRole?UserId='+id);
    }

    UpdateRole(userRoles:UserRolesDTO[]):Observable<any>{
        debugger
        return this.http.post(this.baseUrl+'/api/Accounts/UpdateRole',userRoles);
    }

    getUserRoles(username:string):Observable<any>{
        debugger
        return this.http.get(this.baseUrl+'/api/Accounts/GetUserRoles?username='+username);
    }
}