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
import { AddkennelComponent } from './addkennel/addkennel.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [VolunteerComponent,
    AddVolunteerHoursComponent,
    AddAnimalComponent,
    AddkennelComponent
  ],
  imports: [
		FormsModule,
    CommonModule,
		FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdoptifyModule { }
