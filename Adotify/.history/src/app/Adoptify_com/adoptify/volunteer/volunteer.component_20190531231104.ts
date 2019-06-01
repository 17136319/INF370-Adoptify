import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
  public profileFor:FormGroup;
  submitted = false;
  hide;
  constructor(public form: FormBuilder) {
    		this.profileFor = this.form.group({
            username:['',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
            email:['',Validators.required],
            number:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
            pwd:['',Validators.required]
         });
   }
   Submit() { 
    console.log('');
    this.submitted = true; }
  ngOnInit() {
  }

}
