import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-volunteer-hours',
  templateUrl: './add-volunteer-hours.component.html',
  styleUrls: ['./add-volunteer-hours.component.scss']
})
export class AddVolunteerHoursComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit() {
  }

}
