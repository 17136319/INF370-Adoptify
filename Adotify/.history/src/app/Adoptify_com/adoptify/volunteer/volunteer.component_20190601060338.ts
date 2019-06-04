import { Component, OnInit } from '@angular/core';
// import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  constructor() {
    		
   }
   Submit() { 
    console.log('');
    this.submitted = true; }
  ngOnInit() {
  }

}
