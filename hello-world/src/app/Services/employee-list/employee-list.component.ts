import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employeeList">
        <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList : any = [];
  constructor(private _employeeService : EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeList = this._employeeService.getEmployees();
  }

}
