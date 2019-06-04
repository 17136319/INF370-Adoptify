import { Component, OnInit } from '@angular/core';
import {fromEvent as observableFromEvent,  Observable } from 'rxjs';
import { ExampleDatabase, ExampleDataSource } from '../../Volunteers/searchvolunteer/helpers.data';
import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-searchvolunteer',
  templateUrl: './searchvolunteer.component.html',
  styleUrls: ['./searchvolunteer.component.scss']
})
export class SearchvolunteerComponent implements OnInit {
	public displayedColumns = ['userId', 'userName', 'progress', 'color'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
  	public showFilterTableCode;
  	@ViewChild('filter') filter: ElementRef;

  constructor() { }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
    observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
        debounceTime(150),
        distinctUntilChanged(),)
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }

}
