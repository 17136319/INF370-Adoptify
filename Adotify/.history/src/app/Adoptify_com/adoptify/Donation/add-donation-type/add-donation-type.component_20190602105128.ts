import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen',description: 'H'},
  {position: 2, name: 'Helium',description: 'He'},
  {position: 3, name: 'Lithium',description: 'Li'},
  {position: 4, name: 'Beryllium',description: 'Be'},
  {position: 5, name: 'Boron', description: 'B'},
  {position: 6, name: 'Carbon',description: 'C'},
  {position: 7, name: 'Nitrogen',description: 'N'},
  {position: 8, name: 'Oxygen', description: 'O'},
  {position: 9, name: 'Fluorine',description: 'F'},
  {position: 10, name: 'Neon', description: 'Ne'},
];

@Component({
  selector: 'app-add-donation-type',
  templateUrl: './add-donation-type.component.html',
  styleUrls: ['./add-donation-type.component.scss']
})
export class AddDonationTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
