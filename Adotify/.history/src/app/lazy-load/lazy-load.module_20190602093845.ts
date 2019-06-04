import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { AuthModule } from '../auth/auth.module';
//Component
import { VolunteerComponent } from '../Adoptify_com/adoptify/Volunteers/volunteer/volunteer.component';
import { AddAnimalComponent } from '../Adoptify_com/adoptify/Animal/add-animal/add-animal.component';
import { AddVolunteerHoursComponent } from '../Adoptify_com/adoptify/Volunteers/add-volunteer-hours/add-volunteer-hours.component';
import { ViewanimalComponent } from '../Adoptify_com/adoptify/Animal/viewanimal/viewanimal.component';
import { AddDonationTypeComponent } from '../Adoptify_com/adoptify/Donation/add-donation-type/add-donation-type.component';


const routes: Routes = [ 
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'AddAnimal', component: AddAnimalComponent },
    { path: 'ViewAnimal', component: ViewanimalComponent },
    { path: 'LookupTB', component: AddDonationTypeComponent },
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
