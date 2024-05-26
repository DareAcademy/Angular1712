import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CountryService } from './Servicies/CountryService';
import { AddUserComponent } from './add-user/add-user.component';
import { AccountService } from './Servicies/AccountService';
import { NewRoleComponent } from './new-role/new-role.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationInterceptor } from './Interceptors/authentication.interceptor';
import { ErrorhandlingInterceptor } from './Interceptors/errorhandling.interceptor';
import { Error404Component } from './error404/error404.component';
import { Error401Component } from './error401/error401.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCountryComponent,
    CountryListComponent,
    NewPatientComponent,
    PatientListComponent,
    AddUserComponent,
    NewRoleComponent,
    UserListComponent,
    UserRoleComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    Error401Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountryService,
              AccountService,
              {provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor,multi:true},
              {provide:HTTP_INTERCEPTORS,useClass:ErrorhandlingInterceptor,multi:true}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
