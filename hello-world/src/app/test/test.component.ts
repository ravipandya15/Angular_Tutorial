import { Component, OnInit } from '@angular/core';
// @Component is directives which says this class 'AppComponent' is not a normal class.
// it is Component
@Component({
  // 3 ways to use selector.
  selector: 'app-test',
  // selector: '.app-test',
  // selector: '[app-test]',
  // 2 ways for template 1. inline template 2. templateUrl
  // templateUrl: './test.component.html',
  // for multiple line, use backtick instead of single quotes
  template: '<div>Hello from inline template</div>',
  // 2 ways for style 1. inline stlye 2. styleUrls
  // styleUrls: ['./test.component.css']
  styles: [`
    div {
      color : blue
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
