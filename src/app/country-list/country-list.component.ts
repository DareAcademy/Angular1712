import { Component ,OnInit} from '@angular/core';
import { CountryService } from '../Servicies/CountryService';
import { Country } from '../Models/Country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  liCountry!:Country[]

  constructor(private countryService:CountryService, private router:Router){}

ngOnInit(): void {
  debugger
  this.fillCountryList()
}

Delete(Id:number){
debugger
this.countryService.Delete(Id).subscribe({
  next:data=>{
    console.log("Success")
    this.fillCountryList()
   

  },
  error:err=>{
    console.log("Error")
  }
})
}

Edit(id:number){
this.router.navigate(['/NewCountry'],{queryParams:{Id:id}});
}

fillCountryList(){
  this.countryService.LoadAll().subscribe({
    next:data=>{
      debugger
      this.liCountry=data
    },
    error:err=>{
      console.log("error")
    }
  })
}
}
