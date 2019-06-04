import { Component, OnInit, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface Title {
 
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  
  ngOnInit() {
  }

}
