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
import { SearchvolunteerworktypeComponent } from './Volunteers/searchvolunteerworktype/searchvolunteerworktype.component';
import { AddvolunteerworktypeComponent } from './Volunteers/addvolunteerworktype/addvolunteerworktype.component';
import { SearchdonorComponent } from './Donation/searchdonor/searchdonor.component';
import { SearchdonationtypeComponent } from './Donation/searchdonationtype/searchdonationtype.component';
import { MaintaindonationtypeComponent } from './Donation/maintaindonationtype/maintaindonationtype.component';
import { MaintainvolunteerworktypeComponent } from './Volunteers/maintainvolunteerworktype/maintainvolunteerworktype.component';
import { MaintaindonorComponent } from './Donation/maintaindonor/maintaindonor.component';
import { AddanimaltypeComponent } from './Animal/addanimaltype/addanimaltype.component';
import { SearchanimaltypeComponent } from './Animal/searchanimaltype/searchanimaltype.component';
import { MaintainanimaltypeComponent } from './Animal/maintainanimaltype/maintainanimaltype.component';
import { MaintainbreedtypeComponent } from './Animal/maintainbreedtype/maintainbreedtype.component';
import { SearchbreedtypeComponent } from './Animal/searchbreedtype/searchbreedtype.component';
import { AddbreedtypeComponent } from './Animal/addbreedtype/addbreedtype.component';
import { FinalisestatusComponent } from './Animal/finalisestatus/finalisestatus.component';
import { ClaimanimalComponent } from './Animal/claimanimal/claimanimal.component';
import { AddfostercareparentComponent } from './Foster Care/addfostercareparent/addfostercareparent.component';
import { SearchfostercareparentComponent } from './Foster Care/searchfostercareparent/searchfostercareparent.component';
import { AddFosterCareComponent } from './Foster Care/add-foster-care/add-foster-care.component';
import { RemoveFosterCareComponent } from './Foster Care/remove-foster-care/remove-foster-care.component';
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
import { AddDonorComponent } from './Donation/add-donor/add-donor.component';

const adoptifyRoutes: Routes = [
    // auth/adoptify/*

    // donation 
    { path: 'adddonationtype', component: AddDonationTypeComponent},
    { path: 'adddonation', component: AddDonationComponent},
    { path: 'maintaindonation', component: MaintaindonationComponent},
    { path: 'searchdonation', component: SearchdonationComponent},
    { path: 'adddonor', component: AddDonorComponent},
    { path: 'searchdonor', component: SearchdonorComponent},
    { path: 'searchdonationtype', component: SearchdonationtypeComponent },
    { path: 'maintaindonor', component: MaintaindonorComponent},
    { path: 'maintaindonationtype', component: MaintaindonationtypeComponent },  

    // Event
    { path: 'addevent', component: AddeventComponent},
    { path: 'searchevent', component: SearcheventComponent},
    { path: 'maintainevent', component: MaintaineventComponent },
    { path: 'addeventtype', component: AddeventtypeComponent},
    { path: 'searcheventtype', component: SearcheventtypeComponent},
    { path: 'maintaineventtype', component: MaintaineventtypeComponent },
    { path: 'makeeventsale', component: MakeeventsaleComponent },
    { path: 'searcheventsale', component: SearcheventsaleComponent },
    // animal
    { path: 'addanimal', component: AddAnimalComponent},
    { path: 'searchanimal', component: SearchanimalComponent},
    { path: 'maintainanimal', component: ViewanimalComponent },
    { path: 'addanimaltype', component: AddanimaltypeComponent},
    { path: 'searchanimaltype', component: SearchanimaltypeComponent},
    { path: 'maintainanimaltype', component: MaintainanimaltypeComponent },
    { path: 'addbreed', component: AddbreedtypeComponent},
    { path: 'searchbreed', component: SearchbreedtypeComponent},
    { path: 'maintainbreed', component: MaintainbreedtypeComponent },
    { path: 'finalisestatus', component: FinalisestatusComponent },
    { path: 'claimanimal', component: ClaimanimalComponent },

    //kennel
    { path: 'addkennel', component:  AddkennelComponent},
    { path: 'maintainkennel', component: MaintainkennelComponent },
    { path: 'searchkennel', component: SearchkennelComponent},
    { path: 'addtokennel', component: AddtokennelComponent },
    { path: 'removetokennel', component: RemovetokennelComponent },
    // volunteer
    { path: 'addvolunteer', component: VolunteerComponent },
    { path: 'maintainvolunteer', component: MainainvolunteerComponent },
    { path: 'searchvolunteer', component: SearchvolunteerComponent},
    { path: 'addhours', component: AddVolunteerHoursComponent },
    { path: 'addvolwork', component: AddvolunteerworktypeComponent },
    { path: 'searchvolwork', component: SearchvolunteerworktypeComponent },
    { path: 'maintainvolwork', component: MaintainvolunteerworktypeComponent },
    //fostercare
    { path: 'addfostercareparent', component: AddfostercareparentComponent },
    { path: 'maintainfostercareparent', component: MaintainfostercareparentComponent },
    { path: 'searchfostercareparent', component: SearchfostercareparentComponent},
    { path: 'addfostercare', component: AddFosterCareComponent },
    { path: 'removefostercare', component: RemoveFosterCareComponent },


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