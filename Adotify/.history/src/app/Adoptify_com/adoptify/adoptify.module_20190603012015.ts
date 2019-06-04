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
import { AddDonationTypeComponent } from './Donation/add-donation-type/add-donation-type.component';
import { SearchvolunteerComponent } from './Volunteers/searchvolunteer/searchvolunteer.component';
import { SearchdonorComponent } from './Donation/searchdonor/searchdonor.component';
import { MaintaindonationtypeComponent } from './Donation/maintaindonationtype/maintaindonationtype.component';
import { AddStockTypeComponent } from './Stock/add-stock-type/add-stock-type.component';
import { SearchdonationtypeComponent } from './Donation/searchdonationtype/searchdonationtype.component';
import { SearchstocktypeComponent } from './Stock/searchstocktype/searchstocktype.component';
import { AddStockComponent } from './Stock/add-stock/add-stock.component';
import { SearchStockComponent } from './Stock/search-stock/search-stock.component';
import { MaintainStockComponent } from './Stock/maintain-stock/maintain-stock.component';
import { CaptureStockComponent } from './Stock/capture-stock/capture-stock.component';




@NgModule({
  declarations: [VolunteerComponent,
    AddVolunteerHoursComponent,
    AddAnimalComponent,
    SearchanimalComponent,
    ViewanimalComponent,
    AddDonorComponent,
    AddDonationComponent,
    AddDonationTypeComponent,
    SearchvolunteerComponent,
    SearchdonorComponent,
    MaintaindonationtypeComponent,
    AddStockTypeComponent,
    SearchdonationtypeComponent,
    SearchstocktypeComponent,
    AddStockComponent,
    SearchStockComponent,
    MaintainStockComponent,
    CaptureStockComponent,
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
