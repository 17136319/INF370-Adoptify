import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerComponent } from '../adoptify/volunteer/volunteer.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {
			MatButtonModule,
			MatToolbarModule,
			MatCardModule,
			MatTabsModule,
			MatIconModule,} from '@angular/material';
import { MatInputModule } from '@angular/material';
import {  ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [VolunteerComponent],
  imports: [
    CommonModule
  ]
})
export class AdoptifyModule { }
