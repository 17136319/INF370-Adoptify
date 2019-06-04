import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field/';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
    imports: [ MatFormFieldModule,MatInputModule,],
    exports: [MatFormFieldModule,MatInputModule,MatSelectModule]
  })
  export class MaterialModule { }