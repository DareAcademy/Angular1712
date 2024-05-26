import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from '../Menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  liMenu!:any[]
  role!:string
  filteredMenu:any[]=[]
  constructor(private router:Router){
    debugger
    this.liMenu=menu
    this.role= JSON.parse(JSON.stringify(localStorage.getItem('Roles')))
    this.liMenu.forEach((element:any)=>{
      debugger
      const isInRole=element.roles.find((x:any)=>x==this.role)
      if(isInRole !=undefined){
        this.filteredMenu.push(element)
      }
    })
  }
  Logout(){
    localStorage.removeItem('SecurityKey')
    this.router.navigate(['/'])
  }
}
