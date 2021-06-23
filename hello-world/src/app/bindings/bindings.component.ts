import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `<h1>
                Binding Examples
              </h1>
              <h2 class="text-success">CodeEvaluation</h2>
              <h2 [class]="successClass">CodeEvaluation</h2>
              <h2 class="text-special" [class]="successClass">CodeEvaluation</h2>
              <h2 [class.text-danger] = "hasError">CodeEvaluation</h2>
              <h2 [ngClass] = "messageClasses">CodeEvaluation</h2>
              `,
  styles: [`
  .text-success {
    color : green
  }
  .text-danger {
    color : red
  }
  .text-special {
    font-style : Italic
  }
  `]
})
export class BindingsComponent implements OnInit {

  public successClass = "text-success"
  public hasError = true
  public isSpecial = true
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

}
