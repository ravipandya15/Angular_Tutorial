import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <h3>{{ errorMessage }}</h3>
    <ul *ngFor="let employee of employeeList">
      <li>{{employee.id}} : {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeList : any = [];
  public errorMessage : any;
  constructor(private _employeeService : EmployeeServiceService) { }

  // ngOnit will load only once for component
  ngOnInit(): void {
    // this.employeeList = this._employeeService.getEmployees();
    this._employeeService.getEmployees()
          .subscribe(data => this.employeeList = data,
                  error => this.errorMessage = error);
  }

}
