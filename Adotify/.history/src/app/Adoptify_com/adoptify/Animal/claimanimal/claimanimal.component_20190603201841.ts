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
  displayedColumns: string[] = ['select', 'id', 'name', 'IDnumber', 'surname'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {read: true}) sort: MatSort;
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
