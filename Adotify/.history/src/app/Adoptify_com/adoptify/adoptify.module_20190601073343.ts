import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerComponent } from '../adoptify/volunteer/volunteer.component';
import { AddVolunteerHoursComponent} from '../adoptify/add-volunteer-hours/add-volunteer-hours.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';


@NgModule({
  declarations: [VolunteerComponent,AddVolunteerHoursComponent,AddAnimalCompnent],
  imports: [
		FormsModule,
    CommonModule,
		FlexLayoutModule,
		MaterialModule,
  ],
})
export class AdoptifyModule { }
