import { Component, OnInit } from '@angular/core';
import { Country } from '../Models/Country';
import { CountryService } from '../Servicies/CountryService';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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
          this.Code=data.code
          this.Name=data.name
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Country Updated Successfuly!",
          showConfirmButton: false,
          timer: 1500
        });
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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Country Saved Successfuly!",
        showConfirmButton: false,
        timer: 1500
      });
    }
      })
  }
}
