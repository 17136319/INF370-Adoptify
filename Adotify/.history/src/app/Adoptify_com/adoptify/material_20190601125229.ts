import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field/';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports: [ 
      MatFormFieldModule,MatInputModule,MatSelectModule,
      MatButtonModule,MatCardModule,MatToolbarModule,
      MatAutocompleteModule,MatRadioModule,MatIconModule],
    exports: [ 
      MatFormFieldModule,MatInputModule,MatSelectModule,
      MatButtonModule,MatCardModule,MatToolbarModule,
      MatAutocompleteModule,MatRadioModule,MatIconModule]
  })
  export class MaterialModule { }