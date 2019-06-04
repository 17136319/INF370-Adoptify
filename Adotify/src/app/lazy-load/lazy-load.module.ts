import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { AuthModule } from '../auth/auth.module';
//Component
import { VolunteerComponent } from '../Adoptify_com/adoptify/Volunteers/volunteer/volunteer.component';
import { AddAnimalComponent } from '../Adoptify_com/adoptify/Animal/add-animal/add-animal.component';
import { AddVolunteerHoursComponent } from '../Adoptify_com/adoptify/Volunteers/add-volunteer-hours/add-volunteer-hours.component';
//divin's components
import { AddEmployeeComponent } from '../Adoptify1/Employee/add-employee/add-employee.component';
import { AddEmployeeTypeComponent } from '../Adoptify1/Employee/add-employee-type/add-employee-type.component';
import { MaintainEmployeeComponent } from '../Adoptify1/Employee/maintain-employee/maintain-employee.component';
import { MaintainEmployeeTypeComponent } from '../Adoptify1/Employee/maintain-employee-type/maintain-employee-type.component';
import { SearchEmployeeComponent } from '../Adoptify1/Employee/search-employee/search-employee.component';
import { SearchEmployeeTypeComponent } from '../Adoptify1/Employee/search-employee-type/search-employee-type.component';
import { AddAdopterComponent } from '../Adoptify1/Adoption/Adopter/add-adopter/add-adopter.component';
import { MaintainAdopterComponent } from '../Adoptify1/Adoption/Adopter/maintain-adopter/maintain-adopter.component';
import { SearchAdopterComponent } from '../Adoptify1/Adoption/Adopter/search-adopter/search-adopter.component';
import { CaptureAdoptionPaymentComponent } from '../Adoptify1/Adoption/capture-adoption-payment/capture-adoption-payment.component';
import { CreateAdoptionComponent } from '../Adoptify1/Adoption/create-adoption/create-adoption.component';
import { MaintainAdoptionComponent } from '../Adoptify1/Adoption/maintain-adoption/maintain-adoption.component';
import { ReturnAnimalComponent } from '../Adoptify1/Adoption/return-animal/return-animal.component';
import { SearchAdoptionComponent } from '../Adoptify1/Adoption/search-adoption/search-adoption.component';
import { CaptureMedicalCardComponent } from '../Adoptify1/Medical/capture-medical-card/capture-medical-card.component';



const routes: Routes = [ 
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'AddAnimal', component: AddAnimalComponent },
    //Divin's paths
    { path: 'AddEmployee', component: AddEmployeeComponent },
    { path: 'AddEmployeeType', component: AddEmployeeTypeComponent }, 
    { path: 'MaintainEmployeeType', component: MaintainEmployeeComponent },
    { path: 'MaintainEmployee', component: MaintainEmployeeTypeComponent },
    { path: 'SearchEmployee', component: SearchEmployeeComponent},
    { path: 'SearchEmployeeType', component: SearchEmployeeTypeComponent},
    { path: 'AddAdopter', component: AddAdopterComponent},
    { path: 'MaintainAdopter', component: MaintainAdopterComponent},
    { path: 'SearchAdopter', component: SearchAdopterComponent},
    { path: 'CaptureAdoptionPaymentComponent', component: CaptureAdoptionPaymentComponent},
    { path: 'CreateAdoption', component: CreateAdoptionComponent},
    { path: 'MaintainAdoption', component: MaintainAdoptionComponent},
    { path: 'ReturnAnimal', component: ReturnAnimalComponent},
    { path: 'SearchAdoption', component: SearchAdoptionComponent},
    { path: 'CaptureMedicalCard', component: CaptureMedicalCardComponent},
    // { path: 'Animal', component: Component },
    { path: 'addvolunteer', component: AddVolunteerHoursComponent },
    {path: 'auth', loadChildren: '../auth/auth.module#AuthModule'},
    {path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    {path: 'login', loadChildren: '../pages/login/login.module#LoginModule'},
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},

    {path: '**', redirectTo: 'auth/dashboard'},
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
