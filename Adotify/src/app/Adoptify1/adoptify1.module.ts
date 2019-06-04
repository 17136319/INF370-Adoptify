import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
///modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule1 } from './material1';
// import { AddkennelComponent } from './addkennel/addkennel.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { SearchEmployeeTypeComponent } from '../Adoptify1/Employee/search-employee-type/search-employee-type.component';
import { AddEmployeeComponent } from '../Adoptify1/Employee/add-employee/add-employee.component';
import { AddEmployeeTypeComponent } from './Employee/add-employee-type/add-employee-type.component';
import { MaintainEmployeeComponent } from './Employee/maintain-employee/maintain-employee.component';
import { MaintainEmployeeTypeComponent } from './Employee/maintain-employee-type/maintain-employee-type.component';
import { SearchEmployeeComponent } from './Employee/search-employee/search-employee.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';
import { AddAdopterComponent } from './Adoption/Adopter/add-adopter/add-adopter.component';
import { MaintainAdopterComponent } from './Adoption/Adopter/maintain-adopter/maintain-adopter.component';
import { SearchAdopterComponent } from './Adoption/Adopter/search-adopter/search-adopter.component';
import { CaptureAdoptionPaymentComponent } from './Adoption/capture-adoption-payment/capture-adoption-payment.component';
import { CreateAdoptionComponent } from './Adoption/create-adoption/create-adoption.component';
import { MaintainAdoptionComponent } from './Adoption/maintain-adoption/maintain-adoption.component';
import { ReturnAnimalComponent } from './Adoption/return-animal/return-animal.component';
import { SearchAdoptionComponent } from './Adoption/search-adoption/search-adoption.component';
import { CaptureMedicalCardComponent } from './Medical/capture-medical-card/capture-medical-card.component';



@NgModule({
  declarations: [AddEmployeeComponent, AddEmployeeTypeComponent,
    MaintainEmployeeComponent, MaintainEmployeeTypeComponent,
    SearchEmployeeComponent,SearchEmployeeTypeComponent,
    AddAdopterComponent,MaintainAdopterComponent,
    SearchAdopterComponent, CaptureAdoptionPaymentComponent,
    CreateAdoptionComponent, MaintainAdoptionComponent, 
    ReturnAnimalComponent, SearchAdoptionComponent,
    CaptureMedicalCardComponent
  ],
  imports: [
		FormsModule,
    CommonModule,
		FlexLayoutModule,
    MaterialModule1,
    ReactiveFormsModule,
  ],
  entryComponents: [SearchEmployeeComponent]
})
export class AdoptifyModule1 { }
platformBrowserDynamic().bootstrapModule(AdoptifyModule1);