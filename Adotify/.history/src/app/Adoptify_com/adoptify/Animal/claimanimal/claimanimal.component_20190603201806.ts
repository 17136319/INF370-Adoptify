import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
export interface PeriodicElement {
  name: string;
  id: number;
  IDnumber: number;
  surname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'John', IDnumber: 1.0079, surname: 'Temporary'},
  {id: 2, name: 'Theodore', IDnumber: 4.0026, surname: 'Temporary'},
  {id: 3, name: 'Violet', IDnumber: 6.941, surname: 'Temporary'},
  {id: 4, name: 'Isabella', IDnumber: 9.0122, surname: 'Temporary'},
  {id: 5, name: 'Boron', IDnumber: 10.811, surname: 'Temporary'},
  {id: 6, name: 'Levi', IDnumber: 12.0107, surname: 'Temporary'},
  {id: 7, name: 'Mia', IDnumber: 14.0067, surname: 'Temporary'},
  {id: 8, name: 'Violet', IDnumber: 15.9994, surname: 'Temporary'},
  {id: 9, name: 'Cora', IDnumber: 18.9984, surname: 'Temporary'},
  {id: 10, name: 'Charlotte', IDnumber: 20.1797, surname: 'Temporary'},
];
@Component({
  selector: 'app-claimanimal',
  templateUrl: './claimanimal.component.html',
  styleUrls: ['./claimanimal.component.scss']
})
export class ClaimanimalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
