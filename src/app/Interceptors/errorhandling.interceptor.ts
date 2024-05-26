import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class ErrorhandlingInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let msg=''
    return next.handle(request).pipe(
    
      catchError((error:HttpErrorResponse)=>{
        if(error.status==404){
          this.router.navigate(['/error404'])
        }
        else if(error.status==401){
          this.router.navigate(['/error401'])
        }
        else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500
        });
      }
        return throwError(msg)
      })
      
    )
  }
}
