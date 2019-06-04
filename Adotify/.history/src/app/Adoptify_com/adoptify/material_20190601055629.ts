import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
    imports: [ MatFormFieldModule,MatInputModule],
    exports: [MatFormFieldModule,MatInputModule]
  })
  export class MaterialModule { }