import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

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

  displayedColumns: string[] = ['select','position', 'name','description'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }
}
