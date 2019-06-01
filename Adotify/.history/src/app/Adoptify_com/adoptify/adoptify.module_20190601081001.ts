import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { VolunteerComponent } from '../adoptify/volunteer/volunteer.component';
import { AddVolunteerHoursComponent} from '../adoptify/Volunteers/add-volunteer-hours/add-volunteer-hours.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
///modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';



@NgModule({
  declarations: [VolunteerComponent,
    AddVolunteerHoursComponent,
    AddAnimalComponent
  ],
  imports: [
		FormsModule,
    CommonModule,
		FlexLayoutModule,
		MaterialModule,
  ],
})
export class AdoptifyModule { }
