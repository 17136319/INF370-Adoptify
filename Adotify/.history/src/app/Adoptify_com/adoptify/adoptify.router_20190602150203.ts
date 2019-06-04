import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDonationTypeComponent } from './Donation/add-donation-type/add-donation-type.component';
import { AddAnimalComponent } from './Animal/add-animal/add-animal.component';
import { SearchanimalComponent } from './Animal/searchanimal/searchanimal.component';
import { AddVolunteerHoursComponent } from './Volunteers/add-volunteer-hours/add-volunteer-hours.component';
import { VolunteerComponent } from './Volunteers/volunteer/volunteer.component';
import { ViewanimalComponent } from './Animal/viewanimal/viewanimal.component';
import { AddDonationComponent } from './Donation/add-donation/add-donation.component';

const adoptifyRoutes: Routes = [
    // auth/adoptify/*
    { path: 'LookupTables', component: AddDonationTypeComponent},
    { path: 'AddAnimal', component: AddAnimalComponent},
    { path: 'searchAnimal', component: SearchanimalComponent},
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'AddDonation', component: AddDonationComponent},
    { path: 'ViewAnimal', component: ViewanimalComponent },
    { path: 'LookupTB', component: AddDonationTypeComponent },
    { path: 'addvolunteer', component: AddVolunteerHoursComponent },
];

@NgModule({
imports: [
  RouterModule.forChild(adoptifyRoutes)
    ],
exports: [
  RouterModule
]
})
export class AdoptifyRouterModule {}