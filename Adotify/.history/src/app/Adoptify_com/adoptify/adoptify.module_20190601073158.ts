import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerComponent } from '../adoptify/volunteer/volunteer.component';
import { AddVolunteercomponent } from '../adoptify/add-volunteer/';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';


@NgModule({
  declarations: [VolunteerComponent,add],
  imports: [
		FormsModule,
    CommonModule,
		FlexLayoutModule,
		MaterialModule,
  ],
})
export class AdoptifyModule { }
