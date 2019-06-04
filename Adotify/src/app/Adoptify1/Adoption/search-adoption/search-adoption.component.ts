import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { isDate } from '@angular/common/src/i18n/format_date';
import { Timestamp } from 'rxjs/Rx';
import { time } from 'd3';


export interface UserData {
  id: string;
  name: string;
  surname: string;
  mobile: string;
  animal: string;
  animalType: string;
  date: string;
  status: string;
}

const DATE: string[] = ['02/12/2017','23/05/2019', '04/06/2019'];

/** Constants used to fill up our data base. */
const SURNAMES: string[] = [
  'Maroon', 'White', 'Black', 
];
const NAMES: string[] = [
  'Mia', 'Asher', 'Emily'];

/** Constants used to fill up our data base. */
const ANIMALS: string[] = [
  '001', '009', '002'
];
const ANIMALTYPES: string[] = [
  'Dog', 'Cat', 'Dog'];
  
const STATUSES: string[] = [
  'Adopted', 'HomeCheck Apprval Required', 'In Progress'];

@Component({
  selector: 'app-search-adoption',
  templateUrl: './search-adoption.component.html',
  styleUrls: ['./search-adoption.component.scss']
})
export class SearchAdoptionComponent implements OnInit {
  selection = new SelectionModel<UserData>(true, []);
  displayedColumns: string[] = ['select','id', 'name', 'surname', 'animal', 'animalType','mobile','date','status'];
  dataSource: MatTableDataSource<UserData>;

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
  checkboxLabel(row?: UserData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }



@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor() {  // Create 100 users
  const users = Array.from({length: 3}, (_, k) => createNewUser(k + 1));
  this.dataSource = new MatTableDataSource(users);
}

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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

return {
  id: id.toString(),
  name: name,    
  surname: SURNAMES[Math.round(Math.random() * (SURNAMES.length - 1))],
  mobile: '', 
  animal : ANIMALS[Math.round(Math.random() * (ANIMALS.length - 1))],
  animalType: ANIMALTYPES [Math.round(Math.random() * (ANIMALTYPES.length - 1))], 
  date: DATE [Math.round(Math.random() * (DATE.length - 1))],
  status: STATUSES [Math.round(Math.random() * (STATUSES.length - 1))],
  
};
}

