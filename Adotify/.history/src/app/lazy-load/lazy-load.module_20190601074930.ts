import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { AuthModule } from '../auth/auth.module';
import { VolunteerComponent } from '../Adoptify_com/adoptify/volunteer/volunteer.component';

const routes: Routes = [ 
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'volunteer', component: AddAnimalComponent },
    { path: 'volunteer', component: VolunteerComponent },
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
