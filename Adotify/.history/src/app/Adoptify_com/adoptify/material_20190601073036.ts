import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field/';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
    imports: [ MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatCardModule],
    exports: [ MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatCardModule]
  })
  export class MaterialModule { }