import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employeeList">
      <li>{{employee.id}} : {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeList : any = [];
  constructor(private _employeeService : EmployeeServiceService) { }

  // ngOnit will load only once for component
  ngOnInit(): void {
    this.employeeList = this._employeeService.getEmployees();
  }

}
