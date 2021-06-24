import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <h3>{{ errorMessage }}</h3>
    <ul *ngFor="let employee of employeeList">
        <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList : any = [];
  public errorMessage : any;
  constructor(private _employeeService : EmployeeServiceService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employeeList = data,
                  error => this.errorMessage = error);
    // this.employeeList = this._employeeService.getEmployees();
  }

}
