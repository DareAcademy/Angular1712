import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCountryComponent } from './new-country/new-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authenticationGuard } from './Guards/authentication.guard';
import { Error404Component } from './error404/error404.component';
import { Error401Component } from './error401/error401.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'error404',component:Error404Component},
  {path:'error401',component:Error401Component},

  {path:'dashboard',component:DashboardComponent,canActivate:[authenticationGuard], children:[
          {path:'',component:NewCountryComponent},
          {path:'CountryList',component:CountryListComponent},
          {path:'NewPatient',component:NewPatientComponent},
          {path:'PatientList',component:PatientListComponent},
          {path:'CreateAccount',component:AddUserComponent},
          {path:'NewRole',component:NewRoleComponent},
          {path:'UserList',component:UserListComponent},
          {path:'UserRole',component:UserRoleComponent},
]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
