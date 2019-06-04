import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { VolunteerComponent } from './Adoptify_com/adoptify/Volunteers/volunteer/volunteer.component';
import { AdoptifyModule } from './Adoptify_com/adoptify/adoptify.module';
// import { AddVolunteerHoursComponent } from './Adoptify_com/adoptify/Volunteers/volunteer/add-volunteer-hours/add-volunteer-hours.component';
import { AdoptifyModule1 } from './Adoptify1/adoptify1.module';
import { AddAnimalComponent } from './Adoptify_com/adoptify/Animal/add-animal/add-animal.component';
import { AddEmployeeComponent } from './Adoptify1/Employee/add-employee/add-employee.component';
import { AddEmployeeTypeComponent } from './Adoptify1/Employee/add-employee-type/add-employee-type.component';
import { MaintainEmployeeComponent } from './Adoptify1/Employee/maintain-employee/maintain-employee.component';
import { MaintainEmployeeTypeComponent } from './Adoptify1/Employee/maintain-employee-type/maintain-employee-type.component';
import { SearchEmployeeComponent } from './Adoptify1/Employee/search-employee/search-employee.component';
import { SearchEmployeeTypeComponent } from './Adoptify1/Employee/search-employee-type/search-employee-type.component';
import { AddAdopterComponent } from './Adoptify1/Adoption/Adopter/add-adopter/add-adopter.component';
import { MaintainAdopterComponent } from './Adoptify1/Adoption/Adopter/maintain-adopter/maintain-adopter.component';
import { SearchAdopterComponent } from './Adoptify1/Adoption/Adopter/search-adopter/search-adopter.component';
import { CaptureAdoptionPaymentComponent } from './Adoptify1/Adoption/capture-adoption-payment/capture-adoption-payment.component';
import { CreateAdoptionComponent } from './Adoptify1/Adoption/create-adoption/create-adoption.component';
import { MaintainAdoptionComponent } from './Adoptify1/Adoption/maintain-adoption/maintain-adoption.component';
import { ReturnAnimalComponent } from './Adoptify1/Adoption/return-animal/return-animal.component';
import { SearchAdoptionComponent } from './Adoptify1/Adoption/search-adoption/search-adoption.component';
import { CaptureMedicalCardComponent } from './Adoptify1/Medical/capture-medical-card/capture-medical-card.component';



@NgModule({
  declarations: [
    AppComponent,
    // AddVolunteerHoursComponent,
    // AddAnimalComponent,
    // VolunteerComponent,
    //AddEmployeeComponent
    //AddEmployeeTypeComponent
    //MaintainEmployeeComponent
    //MaintainEmployeeTypeComponent
    //SearchEmployeeComponent
    //SearchEmployeeTypeComponent
    //AddAdopterComponent
    //MaintainAdopterComponent
    //SearchAdopterComponent
    //CaptureAdoptionPaymentComponent
    //CreateAdoptionComponent
    //MaintainAdoptionComponent
    //ReturnAnimalComponent
    //SearchAdoptionComponent
    //CaptureMedicalCardComponent

  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    AdoptifyModule,
    AdoptifyModule1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
