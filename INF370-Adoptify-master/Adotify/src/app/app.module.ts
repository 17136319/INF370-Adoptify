import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { CreateComponent } from './create/create.component';
import { CompletedAdoptionComponent } from './Adoptify1/Adoption/completed-adoption/completed-adoption.component';
import { AddEmployeeComponent } from './Adoptify1/Employee/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './Adoptify1/Employee/search-employee/search-employee.component';
import { EmployeeCardComponent } from './Adoptify1/Employee/employee-card/employee-card.component';
import { AddAdopterComponent } from './Adoptify1/Adoption/Adopter/add-adopter/add-adopter.component';
import { AddKennelComponent } from './Adoptify1/Kennel/add-kennel/add-kennel.component';
import { CreateAdoptionComponent } from './Adoptify1/Adoption/create-adoption/create-adoption.component';
import { SearchAdoptionComponent } from './Adoptify1/Adoption/search-adoption/search-adoption.component';
import { MaintainAdoptionComponent } from './Adoptify1/Adoption/maintain-adoption/maintain-adoption.component';
import { CaptureAdoptionPaymentComponent } from './Adoptify1/Adoption/capture-adoption-payment/capture-adoption-payment.component';
import { CaptureAdoptionHomeCheckReportComponent } from './Adoptify1/Adoption/capture-adoption-home-check-report/capture-adoption-home-check-report.component';
import { ScheduleAdoptionHomeCheckComponent } from './Adoptify1/Adoption/schedule-adoption-home-check/schedule-adoption-home-check.component';
import { CaptureAdoptionDocumentComponent } from './Adoptify1/Adoption/capture-adoption-document/capture-adoption-document.component';
import { CollectAnimalComponent } from './Adoptify1/Adoption/collect-animal/collect-animal.component';
import { ReturnAnimalComponent } from './Adoptify1/Adoption/return-animal/return-animal.component';
import { MedicalBookComponent } from './Adoptify1/Medical/medical-book/medical-book.component';
import { AddVetComponent } from './Adoptify1/Medical/Clinic/add-vet/add-vet.component';
import { MaintainVetComponent } from './Adoptify1/Medical/Clinic/maintain-vet/maintain-vet.component';
import { SearchVetComponent } from './Adoptify1/Medical/Clinic/search-vet/search-vet.component';
import { AddTreatmentComponent } from './Adoptify1/Medical/Treatments/add-treatment/add-treatment.component';
import { AddVetAppointmentComponent } from './Adoptify1/Medical/Clinic/add-vet-appointment/add-vet-appointment.component';
import { SearchVetAppointmentComponent } from './Adoptify1/Medical/Clinic/search-vet-appointment/search-vet-appointment.component';
import { MaintainVetAppointmentComponent } from './Adoptify1/Medical/Clinic/maintain-vet-appointment/maintain-vet-appointment.component';
import { CaptureMedicalCardComponent } from './Adoptify1/Medical/capture-medical-card/capture-medical-card.component';
import { SearchTreatmentComponent } from './Adoptify1/Medical/Treatments/search-treatment/search-treatment.component';
import { MaintainTreatmentComponent } from './Adoptify1/Medical/Treatments/maintain-treatment/maintain-treatment.component';
import { MaintainEmployeeComponent } from './Adoptify1/Employee/maintain-employee/maintain-employee.component';
import { AddEmployeeTypeComponent } from './Adoptify1/Employee/add-employee-type/add-employee-type.component';
import { SearchEmployeeTypeComponent } from './Adoptify1/Employee/search-employee-type/search-employee-type.component';
import { MaintainEmployeeTypeComponent } from './Adoptify1/Employee/maintain-employee-type/maintain-employee-type.component';
import { SearchAdopterComponent } from './Adoptify1/Adoption/Adopter/search-adopter/search-adopter.component';
import { MaintainAdopterComponent } from './Adoptify1/Adoption/Adopter/maintain-adopter/maintain-adopter.component';
import { SearchKennelComponent } from './Adoptify1/Kennel/search-kennel/search-kennel.component';
import { MaintainKennelComponent } from './Adoptify1/Kennel/maintain-kennel/maintain-kennel.component';
import { MoveAnimalToKennelComponent } from './Adoptify1/Kennel/move-animal-to-kennel/move-animal-to-kennel.component';
import { AddStockComponent } from './Adoptify1/Stock/add-stock/add-stock.component';
import { SearchStockComponent } from './Adoptify1/Stock/search-stock/search-stock.component';
import { MAintainStockComponent } from './Adoptify1/Stock/maintain-stock/maintain-stock.component';
import { CreateStockTypeComponent } from './Adoptify1/Stock/create-stock-type/create-stock-type.component';
import { SearchStockTypeComponent } from './Adoptify1/Stock/search-stock-type/search-stock-type.component';
import { MaintainStockTypeComponent } from './maintain-stock-type/maintain-stock-type.component';




@NgModule({
    declarations: [
    AppComponent,
    CreateComponent,
    CompletedAdoptionComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeCardComponent,
    AddAdopterComponent,
    AddKennelComponent,
    CreateAdoptionComponent,
    SearchAdoptionComponent,
    MaintainAdoptionComponent,
    CaptureAdoptionPaymentComponent,
    CaptureAdoptionHomeCheckReportComponent,
    ScheduleAdoptionHomeCheckComponent,
    CaptureAdoptionDocumentComponent,
    CollectAnimalComponent,
    ReturnAnimalComponent,
    MedicalBookComponent,
    AddVetComponent,
    MaintainVetComponent,
    SearchVetComponent,
    AddTreatmentComponent,
    AddVetAppointmentComponent,
    SearchVetAppointmentComponent,
    MaintainVetAppointmentComponent,
    CaptureMedicalCardComponent,
    SearchTreatmentComponent,
    MaintainTreatmentComponent,
    MaintainEmployeeComponent,
    AddEmployeeTypeComponent,
    SearchEmployeeTypeComponent,
    MaintainEmployeeTypeComponent,
    SearchAdopterComponent,
    MaintainAdopterComponent,
    SearchKennelComponent,
    MaintainKennelComponent,
    MoveAnimalToKennelComponent,
    AddStockComponent,
    SearchStockComponent,
    MAintainStockComponent,
    CreateStockTypeComponent,
    SearchStockTypeComponent,
    MaintainStockTypeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
