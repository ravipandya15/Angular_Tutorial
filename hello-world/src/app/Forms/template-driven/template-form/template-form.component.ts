import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  topics : string[] = ['Angular', 'Vue', 'React'];
  topicHasError : boolean = true;
  submitted = false;

  userModel = new User('','rpandya@hhaexchange.com',8511165331, 'default', 'morning', true);
  constructor(private enrollmentService : EnrollmentService) { }

  ngOnInit(): void {
  }

  validateTopic(topicValue : string){
    if (topicValue === "default"){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }

    //this.topicHasError = topicValue === "default" ? true : false;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.userModel)
    this.enrollmentService.enroll(this.userModel)
        .subscribe(
            data => console.log("success!", data),
            error => console.log('Error!', error)
        )
  }

}
