import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  topics = ['Angular', 'Vue', 'React'];

  userModel = new User('','rpandya@hhaexchange.com',8511165331, '', 'morning', true);
  constructor() { }

  ngOnInit(): void {
  }

}
