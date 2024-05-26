import { Component ,OnInit} from '@angular/core';
import { CountryService } from '../Servicies/CountryService';
import { Country } from '../Models/Country';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.countryService.Delete(Id).subscribe({
        next:data=>{
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          this.fillCountryList()
        }
      })
    
    }
  });


}

Edit(id:number){
this.router.navigate(['/dashboard'],{queryParams:{Id:id}});
}

fillCountryList(){
  this.countryService.LoadAll().subscribe({
    next:data=>{
      debugger
      this.liCountry=data
    }
  })
}
}
