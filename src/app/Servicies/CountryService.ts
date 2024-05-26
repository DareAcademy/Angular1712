import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable} from '@angular/core';
import { Country } from "../Models/Country";
import {Observable} from 'rxjs'
import { environment } from "src/environments/environment.development";

@Injectable()
export class CountryService{
    baseUrl=''

    //function 

constructor(private http:HttpClient){
    this.baseUrl=environment.APIURL
}

Insert(obj:Country):Observable<any>{
   return this.http.post(this.baseUrl+'/api/Country',obj);
}

Update(obj:Country):Observable<any>{
    return this.http.put(this.baseUrl+'/api/Country',obj);
 }
LoadAll():Observable<any>{
    return this.http.get(this.baseUrl+"/api/Country/GetAll")
}

Delete(id:number):Observable<any>{
    debugger
    return this.http.delete(this.baseUrl+'/api/Country?Id='+id); 
}

Load(id:number):Observable<any>{
 
    return this.http.get(this.baseUrl+"/api/Country/Get?Id="+id)
}
}