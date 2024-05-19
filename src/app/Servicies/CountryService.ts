import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core';
import { Country } from "../Models/Country";
import {Observable} from 'rxjs'

@Injectable()
export class CountryService{
//function 
constructor(private http:HttpClient){}

Insert(obj:Country):Observable<any>{
   return this.http.post('http://localhost/Clinic1712Angular/api/Country',obj);
}

Update(obj:Country):Observable<any>{
    return this.http.put('http://localhost/Clinic1712Angular/api/Country',obj);
 }
LoadAll():Observable<any>{
    return this.http.get("http://localhost/Clinic1712Angular/api/Country/GetAll")
}

Delete(id:number):Observable<any>{
    debugger
    return this.http.delete('http://localhost/Clinic1712Angular/api/Country?Id='+id); 
}

Load(id:number):Observable<any>{
    return this.http.get("http://localhost/Clinic1712Angular/api/Country/Get?Id="+id)
}
}