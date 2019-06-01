import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { VolunteerComponent } from './Adoptify_com/adoptify/Volunteers/volunteer/volunteer.component';
import { AdoptifyModule } from './Adoptify_com/adoptify/adoptify.module';
// import { AddVolunteerHoursComponent } from './Adoptify_com/adoptify/Volunteers/volunteer/add-volunteer-hours/add-volunteer-hours.component';
import { AddAnimalComponent } from './Adoptify_com/adoptify/Animal/add-animal/add-animal.component';




@NgModule({
  declarations: [
    AppComponent,
    // AddVolunteerHoursComponent,
    // AddAnimalComponent,
    // VolunteerComponent,
    
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    AdoptifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
