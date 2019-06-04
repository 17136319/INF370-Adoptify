import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  IDnumber: number;
  surname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'John', IDnumber: 1.0079, surname: 'H'},
  {id: 2, name: 'Helium', IDnumber: 4.0026, surname: 'He'},
  {id: 3, name: 'Lithium', IDnumber: 6.941, surname: 'Li'},
  {id: 4, name: 'Beryllium', IDnumber: 9.0122, surname: 'Be'},
  {id: 5, name: 'Boron', IDnumber: 10.811, surname: 'B'},
  {id: 6, name: 'Carbon', IDnumber: 12.0107, surname: 'C'},
  {id: 7, name: 'Nitrogen', IDnumber: 14.0067, surname: 'N'},
  {id: 8, name: 'Oxygen', IDnumber: 15.9994, surname: 'O'},
  {id: 9, name: 'Fluorine', IDnumber: 18.9984, surname: 'F'},
  {id: 10, name: 'Neon', IDnumber: 20.1797, surname: 'Ne'},
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-add-volunteer-hours',
  templateUrl: './add-volunteer-hours.component.html',
  styleUrls: ['./add-volunteer-hours.component.scss']
})
export class AddVolunteerHoursComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'name', 'weight', 'symbol'];
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  constructor() { }

  ngOnInit() {
 
  }
  
}
