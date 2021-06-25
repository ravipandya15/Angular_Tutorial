import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h2>Department List</h2>
    <ul>
      <li (click)='onSelect(department)' [style.color]="isSelected(department) ? 'red' : 'black'" *ngFor="let department of departmentList">
        <h3>{{department.id}}:{{department.name}}</h3>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId : any;
  departmentList:any = [
    {'id':1, 'name': 'Angular'},
    {'id':2, 'name': 'Vue'},
    {'id':3, 'name': 'Node'},
    {'id':4, 'name': 'React'},
    {'id':5, 'name': 'C#'},
    {'id':6, 'name': 'SQL'},
  ];

  constructor(private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      let id = params.get('id');
      this.selectedId = id;
    });
  }

  onSelect(department : any) : any{
    // ['/departments', department.id] is knows as Link parameters array
    // this.router.navigate(['/departments', department.id])

    // relative navigation
    // besically tells that just add department id to the previous path
    this.router.navigate([department.id], {relativeTo:this.route})
  }

  isSelected(department : any) : boolean{
    return department.id == this.selectedId;
    // ideally it should be === to check value and type.
    // but we are having issues in type so == is written.
    // return department.id === this.selectedId;
  }

}
