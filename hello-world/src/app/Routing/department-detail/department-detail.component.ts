import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected departmentId = {{departmentId}}</h3>
    <p>
      <button (click)='goPrevious()'>Previous</button>
      <button (click)='goNext()'>Next</button>
    </p>

    <p>
      <button (click)="redirectToOverview()">Overview</button>
      <button (click)="redirectToContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <div>
      <button (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;
  constructor(private route : ActivatedRoute, 
              private router : Router) { }

  ngOnInit(): void {
    // when we want to navigate back to the same component. 
    //so angular will reuse the same component instead of initialize it again
    // so ngOninIt() method will not be called and below code will not evaluated.
    // let id = this.route.snapshot.paramMap.get('id');
    // this.departmentId = id;

    // to overcome above problem
    // need to use paramMap Observable
    // as it is observable pattern and it's subscribe to paramMap, if it changes
    // changes reflect hear as well and code executes.
    this.route.paramMap.subscribe((paramMap : ParamMap) => {
      let id = paramMap.get('id');
      this.departmentId = id;
    });
  }

  goPrevious(): any{
    let previousId = parseInt(this.departmentId) - 1;
    // known as link parameters array : ['/departments', previousId]
    // this.router.navigate(['/departments', previousId]);

    // relative navigation
    this.router.navigate(['../',previousId], {relativeTo:this.route});
  }

  goNext(): any{
    let nextId = parseInt(this.departmentId) + 1;
    // this.router.navigate(['/departments', nextId]);

    // relative navigation
    this.router.navigate(['../',nextId], {relativeTo:this.route});
  }

  goToDepartments():any {
    let selectedId = this.departmentId ? this.departmentId : null;
    // {id:selectedId} is optional paramters. we haven't added like this route
    // in app.routing.module.ts
    // this.router.navigate(['/departments', {id:selectedId}]);
    // can pass more than one optional parameters as well.
    // this.router.navigate(['/departments', {id:selectedId, test: 'test'}]);

    // relative navigation
    // tells just bo back one step - for department/id to department and then
    // add {id:selectedId} -  optional route
    this.router.navigate(['../', {id:selectedId}], {relativeTo:this.route});
  }

  redirectToOverview() : any{
    this.router.navigate(['overview'], {relativeTo:this.route});
  }

  redirectToContact() : any{
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
