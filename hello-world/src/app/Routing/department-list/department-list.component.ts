import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h2>Department List</h2>
    <ul>
      <li (click)='onSelect(department)' *ngFor="let department of departmentList">
        <h3>{{department.id}}:{{department.name}}</h3>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departmentList:any = [
    {'id':1, 'name': 'Angular'},
    {'id':2, 'name': 'Vue'},
    {'id':3, 'name': 'Node'},
    {'id':4, 'name': 'React'},
    {'id':5, 'name': 'C#'},
    {'id':6, 'name': 'SQL'},
  ];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSelect(department : any): any{
    this.router.navigate(['departments', department.id])
  }

}
