import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../shared/password.validator';
import { forbiddenNameValidator } from '../../shared/user-name.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // formBilder is a service
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  // registrationForm = new FormGroup({
  //   userName : new FormControl('Ravi Pandya'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl(''),
  //   })
  // });

  registrationForm = this.fb.group({
    userName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/), forbiddenNameValidator(/admin/)]],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
      city : [''],
      state : [''],
      postalCode : [''],
    })
  }, { validator : PasswordValidator});

  //getter method to get userName
  get userName(){
    return this.registrationForm.get('userName');
  }

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
