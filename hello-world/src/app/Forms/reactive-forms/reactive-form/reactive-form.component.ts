import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PasswordValidator } from '../../shared/password.validator';
import { forbiddenNameValidator } from '../../shared/user-name.validator';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // registrationForm : FormGroup;
  
  // formBilder is a service
  constructor(private fb : FormBuilder, private registrationService : RegistrationService) { }

  //getter method to get userName
  get userName(){
    return this.registrationForm.get('userName');
  }
  get email(){
    return this.registrationForm.get('email');
  } 

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmails(){
    this.alternateEmails.push(this.fb.control(''));
  }

  ngOnInit(): void {
    // valueChanges returns observable so need to subscribe
    this.registrationForm.get('subscribe')?.valueChanges
        .subscribe(checkedValue => {
          const email = this.registrationForm.get('email');
          if (checkedValue){
            email?.setValidators(Validators.required);
          }
          else{
            email?.clearValidators();
          }

          // finaly we need to call updateValueAndValidity to ensure correct status is reflected
          email?.updateValueAndValidity();
        });
  }

  registrationForm = this.fb.group({
    userName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/), forbiddenNameValidator(/admin/)]],
    email : [''],
    subscribe : [false],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
      city : [''],
      state : [''],
      postalCode : [''],
    }),
    alternateEmails : this.fb.array([])
  }, { validator : PasswordValidator});

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

  onSubmit(){
    console.log(this.registrationForm.value)
    this.registrationService.register(this.registrationForm.value)
        .subscribe(
          response => console.log("Success!", response),
          error => console.error("Error!", error)
        );
  }

}
