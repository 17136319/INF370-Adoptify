import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { VolunteerComponent } from './Volunteers/volunteer/volunteer.component';
import { AddVolunteerHoursComponent} from './Volunteers/add-volunteer-hours/add-volunteer-hours.component';
import { AddAnimalComponent } from './Animal/add-animal/add-animal.component';
///modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
//this is where the router goes
import { AdoptifyRouterModule } from './adoptify.router';

// import { AddkennelComponent } from './addkennel/addkennel.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { SearchanimalComponent } from './Animal/searchanimal/searchanimal.component';
import { ViewanimalComponent } from './Animal/viewanimal/viewanimal.component';
import { AddDonorComponent } from './Donation/add-donor/add-donor.component';
import { AddDonationComponent } from './Donation/add-donation/add-donation.component';
import { AddDonationTypeComponent } from './Donation/search-donation-type/add-donation-type.component';
import { ViewdonationComponent } from './Donation/viewdonation/viewdonation.component';




@NgModule({
  declarations: [VolunteerComponent,
    AddVolunteerHoursComponent,
    AddAnimalComponent,
    SearchanimalComponent,
    ViewanimalComponent,
    AddDonorComponent,
    AddDonationComponent,
    AddDonationTypeComponent,
    ViewdonationComponent,
  ],
  imports: [
		FormsModule,
    CommonModule,
		FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    AdoptifyRouterModule,
  ],
})
export class AdoptifyModule { }
