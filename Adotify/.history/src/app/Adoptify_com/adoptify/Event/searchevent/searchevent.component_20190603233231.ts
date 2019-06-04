import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Cat',description: ''},
  {position: 2, name: 'Dog',description: ''},
];

@Component({
  selector: 'app-searchevent',
  templateUrl: './searchevent.component.html',
  styleUrls: ['./searchevent.component.scss']
})
export class SearcheventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
