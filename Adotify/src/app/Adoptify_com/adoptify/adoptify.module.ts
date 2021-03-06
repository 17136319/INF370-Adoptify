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
import { AddvolunteerworktypeComponent } from './Volunteers/addvolunteerworktype/addvolunteerworktype.component';
import { MaintainvolunteerworktypeComponent } from './Volunteers/maintainvolunteerworktype/maintainvolunteerworktype.component';
import { SearchvolunteerworktypeComponent } from './Volunteers/searchvolunteerworktype/searchvolunteerworktype.component';
import { AddfostercareparentComponent } from './Foster Care/addfostercareparent/addfostercareparent.component';
import { SearchfostercareparentComponent } from './Foster Care/searchfostercareparent/searchfostercareparent.component';
import { AddFosterCareComponent } from './Foster Care/add-foster-care/add-foster-care.component';
import { RemoveFosterCareComponent } from './Foster Care/remove-foster-care/remove-foster-care.component';
import { MainainvolunteerComponent } from './Volunteers/mainainvolunteer/mainainvolunteer.component';
import { MaintaindonorComponent } from './Donation/maintaindonor/maintaindonor.component';
import { MaintainanimaltypeComponent } from './Animal/maintainanimaltype/maintainanimaltype.component';
import { AddanimaltypeComponent } from './Animal/addanimaltype/addanimaltype.component';
import { AddbreedtypeComponent } from './Animal/addbreedtype/addbreedtype.component';
import { MaintainbreedtypeComponent } from './Animal/maintainbreedtype/maintainbreedtype.component';
import { SearchbreedtypeComponent } from './Animal/searchbreedtype/searchbreedtype.component';
import { SearchanimaltypeComponent } from './Animal/searchanimaltype/searchanimaltype.component';
import { FinalisestatusComponent } from './Animal/finalisestatus/finalisestatus.component';
import { ClaimanimalComponent } from './Animal/claimanimal/claimanimal.component';
import { MaintainfostercareparentComponent } from './Foster Care/maintainfostercareparent/maintainfostercareparent.component';
import { AddkennelComponent } from './Kennel/addkennel/addkennel.component';
import { MaintainkennelComponent } from './Kennel/maintainkennel/maintainkennel.component';
import { SearchkennelComponent } from './Kennel/searchkennel/searchkennel.component';
import { AddtokennelComponent } from './Kennel/addtokennel/addtokennel.component';
import { RemovetokennelComponent } from './Kennel/removetokennel/removetokennel.component';
import { AddeventComponent } from './Event/addevent/addevent.component';
import { SearcheventComponent } from './Event/searchevent/searchevent.component';
import { MaintaineventComponent } from './Event/maintainevent/maintainevent.component';
import { MakeeventsaleComponent } from './Event/makeeventsale/makeeventsale.component';
import { SearcheventsaleComponent } from './Event/searcheventsale/searcheventsale.component';
import { RefundeventsaleComponent } from './Event/refundeventsale/refundeventsale.component';
import { AddeventtypeComponent } from './Event/addeventtype/addeventtype.component';
import { SearcheventtypeComponent } from './Event/searcheventtype/searcheventtype.component';
import { MaintaineventtypeComponent } from './Event/maintaineventtype/maintaineventtype.component';
import { MaintaindonationComponent } from './Donation/maintaindonation/maintaindonation.component';
import { SearchdonationComponent } from './Donation/searchdonation/searchdonation.component';
import { ReportsComponent } from './Report/reports/reports.component';




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
    AddvolunteerworktypeComponent,
    MaintainvolunteerworktypeComponent,
    SearchvolunteerworktypeComponent,
    AddfostercareparentComponent,
    SearchfostercareparentComponent,
    AddFosterCareComponent,
    RemoveFosterCareComponent,
    MainainvolunteerComponent,
    MaintaindonorComponent,
    MaintainanimaltypeComponent,
    AddanimaltypeComponent,
    AddbreedtypeComponent,
    MaintainbreedtypeComponent,
    SearchbreedtypeComponent,
    SearchanimaltypeComponent,
    FinalisestatusComponent,
    ClaimanimalComponent,
    MaintainfostercareparentComponent,
    AddkennelComponent,
    MaintainkennelComponent,
    SearchkennelComponent,
    AddtokennelComponent,
    RemovetokennelComponent,
    AddeventComponent,
    SearcheventComponent,
    MaintaineventComponent,
    MakeeventsaleComponent,
    SearcheventsaleComponent,
    RefundeventsaleComponent,
    AddeventtypeComponent,
    SearcheventtypeComponent,
    MaintaineventtypeComponent,
    MaintaindonationComponent,
    SearchdonationComponent,
    ReportsComponent,
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
