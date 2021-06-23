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
  template: `<div>
                
                <h1>things which we can dp with interpolation</h1>
                Hello {{name}}
                <h2>{{2 + 3}}</h2>
                <h2>{{"Welcome " + name}}</h2>
                <h2>{{name.length}}</h2>
                <h2>{{name.toUpperCase()}}</h2>
                <h2>{{geetUser()}}</h2>

                <h1>things which we can't do</h1>
                can not use global javascript variable
                <h2>window.location.href</h2>
                if we want then
                <h2>{{siteUrl}}</h2>
                <!--<h2>{{a = 2}}</h2>-->

                <h1>Property binding</h1>
                <input [id]="myId" type="text" value="Ravi" />
                <input [disabled]="isDisabled" [id]="myId" type="text" value="Ravi" />
                <input bind-disabled="isDisabled" [id]="myId" type="text" value="Ravi" />
                <-- Interpolation will also work only for string. for boolean like disabled it will not work-->
                <input id="{{myId}}" type="text" value="Ravi" />
                <!--if this input is first property and in chrome console if we use
                $0.getAttribute('value') - will get "Ravi" and $0.value will also return same
                but if we change content in text and again hit both - then $0.getAttribute('value')
                still returns old value while $0.value returns updated value -->
                
            </div>`,
  // 2 ways for style 1. inline stlye 2. styleUrls
  // styleUrls: ['./test.component.css']
  styles: [`
    div {
      color : black
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Ravi Pandya!"
  public siteUrl = window.location.href
  public myId = "testId"
  public isDisabled = true
  constructor() { }

  ngOnInit(): void {
  }

  geetUser(){
    return "Hello Greet"
  }

}
