import {fromEvent as observableFromEvent} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-searchanimal',
  templateUrl: './searchanimal.component.html',
  styleUrls: ['./searchanimal.component.scss']
})
export class SearchanimalComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['John', 'Fred', 'Jack'];
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
