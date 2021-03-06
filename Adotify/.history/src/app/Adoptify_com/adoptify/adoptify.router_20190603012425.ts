import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDonationTypeComponent } from './Donation/add-donation-type/add-donation-type.component';
import { AddAnimalComponent } from './Animal/add-animal/add-animal.component';
import { SearchanimalComponent } from './Animal/searchanimal/searchanimal.component';
import { AddVolunteerHoursComponent } from './Volunteers/add-volunteer-hours/add-volunteer-hours.component';
import { VolunteerComponent } from './Volunteers/volunteer/volunteer.component';
import { ViewanimalComponent } from './Animal/viewanimal/viewanimal.component';
import { AddDonationComponent } from './Donation/add-donation/add-donation.component';
import { SearchvolunteerComponent } from './Volunteers/searchvolunteer/searchvolunteer.component';

const adoptifyRoutes: Routes = [
    // auth/adoptify/*
    { path: 'AddDonationType', component: AddDonationTypeComponent},
    { path: 'addanimal', component: AddAnimalComponent},
    { path: 'searchanimal', component: SearchanimalComponent},
    { path: 'addvolunteer', component: VolunteerComponent },
    { path: 'adddonation', component: AddDonationComponent},
    { path: 'viewanimal', component: ViewanimalComponent },
    { path: 'searchanimal', component: SearchanimalComponent },
    { path: 'addhours', component: AddVolunteerHoursComponent },
    { path: 'searchvolunteer', component: SearchvolunteerComponent},
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