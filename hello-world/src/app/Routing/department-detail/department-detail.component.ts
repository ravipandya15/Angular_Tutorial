import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected departmentId = {{departmentId}}</h3>
    <a (click)='goPrevious()'>Previous</a>
    <a (click)='goNext()'>Next</a>
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
    this.router.navigate(['departments', previousId]);
  }

  goNext(): any{
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['departments', nextId]);
  }

}
