import { Component, OnInit } from '@angular/core';
import { Country } from '../Models/Country';
import { CountryService } from '../Servicies/CountryService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit {
  Id!:number
  Code!:string
  Name!:string
  IsEdit:boolean=false
  constructor(private countryService:CountryService,private activate:ActivatedRoute){}

  ngOnInit(): void {
    debugger
    if(this.activate.snapshot.queryParams["Id"] !=undefined){
      this.IsEdit=true
      this.Id= parseInt( this.activate.snapshot.queryParams["Id"])

      this.countryService.Load(this.Id).subscribe({
        next:data=>{
          debugger
          console.log("success")
          this.Code=data.code
          this.Name=data.name
        },
        error:err=>{
          console.log("error")
        }

      })
    }
   
    
  }

  Update(){
    debugger
    var country=new Country();
    country.id=this.Id
    country.code=this.Code
    country.name=this.Name

    this.countryService.Update(country).subscribe({
      next:data=>{
        console.log("success")
      },
      error:err=>{
        console.log("error")
      }
    })
  }
  Save(){
    // read value
    debugger
    var country=new Country();
    country.code=this.Code
    country.name=this.Name

    this.countryService.Insert(country).subscribe({
    next:data=>{
      debugger
      console.log("success")
    },
    error:err=>{
      debugger
      console.log("error")
    }
      })
  }
}
