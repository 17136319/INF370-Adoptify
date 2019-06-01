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
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VolunteerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		MatInputModule,
		ReactiveFormsModule,
		FormsModule
  ]
})
export class AdoptifyModule { }
