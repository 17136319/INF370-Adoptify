import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  constructor() {
    		this.profileForm = this.form.group({
             username:['',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
            email:['',Validators.required],
            number:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
            pwd:['',Validators.required]
         });
   }

  ngOnInit() {
  }

}
