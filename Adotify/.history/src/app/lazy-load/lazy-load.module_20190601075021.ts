import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { AuthModule } from '../auth/auth.module';
//Component
import { VolunteerComponent } from '../Adoptify_com/adoptify/volunteer/volunteer.component';
import { AddAnimalComponent } from '../Adoptify_com/adoptify/add-animal/add-animal.component';
import { AddVolunteerHoursComponent } from '../Adoptify_com/adoptify/add-volunteer-hours/add-volunteer-hours.component';

const routes: Routes = [ 
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'volunteer', component: AddAnimalComponent },
    { path: 'volunteer', component: AddVolunteerHoursComponent },
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
