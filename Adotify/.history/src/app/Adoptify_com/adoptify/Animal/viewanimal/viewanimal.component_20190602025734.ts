import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewanimal',
  templateUrl: './viewanimal.component.html',
  styleUrls: ['./viewanimal.component.scss']
})
export class ViewanimalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

}
