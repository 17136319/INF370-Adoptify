import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { VolunteerComponent } from './Adoptify_com/adoptify/volunteer/volunteer.component';
import { AdoptifyModule } from './Adoptify_com/adoptify/adoptify.module';




@NgModule({
  declarations: [
    AppComponent,
    // VolunteerComponent,
    
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    //AdoptifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
