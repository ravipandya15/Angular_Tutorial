import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    userName : new FormControl('Ravi Pandya'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      postalCode : new FormControl(''),
    })
  });

  loadApiData(){
    // it's required to set all value to setValue method but if we want to pass only few items, use patch value
    // this.registrationForm.setValue({
    //   userName : 'Kavyansh',
    //   password : 'Test',
    //   confirmPassword : 'Test',
    //   // address: {
    //   //   city : 'Surat',
    //   //   state : 'Gujarat',
    //   //   postalCode : '395009'
    //   // }
    // })

    this.registrationForm.patchValue({
      userName : 'Kavyansh',
      password : 'Test',
      confirmPassword : 'Test'
    })
  }

}
