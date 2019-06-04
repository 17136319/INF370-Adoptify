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
import { MainainvolunteerComponent } from './Volunteers/mainainvolunteer/mainainvolunteer.component';

const adoptifyRoutes: Routes = [
    // auth/adoptify/*

    // donation 
    { path: 'adddonationtype', component: AddDonationTypeComponent},
    { path: 'adddonation', component: AddDonationComponent},
    { path: 'adddonor', component: AddDonationComponent},
    { path: 'searchdonor', component: SearchanimalComponent},
    { path: 'viewdonor', component: ViewanimalComponent },  

    // animal
    { path: 'addanimal', component: AddAnimalComponent},
    { path: 'searchanimal', component: SearchanimalComponent},
    { path: 'viewanimal', component: ViewanimalComponent },


    // volunteer
    { path: 'addvolunteer', component: VolunteerComponent },
    { path: 'searchvolunteer', component: SearchvolunteerComponent},
    { path: 'addhours', component: AddVolunteerHoursComponent },
    { path: 'addvolwork', component: AddVolunteerHoursComponent },
    { path: 'searchvolwork', component: searchvolunteerworktypeComponent },
    { path: 'maintainvolwork', component: MainainvolunteerComponent },
    
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