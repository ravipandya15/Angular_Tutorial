import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `<h1>
                Binding Examples
              </h1>
              <h1>Class Binding</h1>
              <h2 class="text-success">CodeEvaluation</h2>
              <h2 [class]="successClass">CodeEvaluation</h2>
              <h2 class="text-special" [class]="successClass">CodeEvaluation</h2>
              <h2 [class.text-danger] = "hasError">CodeEvaluation</h2>
              <h2 [ngClass] = "messageClasses">CodeEvaluation</h2>

              <h1>Style Binding</h1>
              <h2 style="color : blue">Style Binding 1</h2>
              <h2 [style.color]= "'orange'">Style Binding 2</h2>
              <h2 [style.color]= "hasError ? 'red' : 'orange'">Style Binding 3</h2>
              <h2 [ngStyle]= "styleClasses">Style Binding 4</h2>

              <h1>Event Binding</h1>
              <button (click)="onClick($event)">Greet</button>
              <button (click)="greeting = 'Welcome from Greet 2'">Greet 2</button>
              {{greeting}}

              <h1>Template Referance variable</h1>
              <input #myInput type="text" />
              <button (click)="onTemplateReferanceVariable(myInput.value)">
                  Template referance variable
              </button>

              <h1>Two way data binding</h1>
              <input [(ngModel)]="name" type="text"/>
              {{name}}
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
  public styleClasses = {
    color : "purple",
    fontStyle : "Italic" 
  }
  public greeting = "";
  public name = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event : any){
    console.log("Welcome to Angular Tutorial")
    this.greeting = "Event is " + event.type + " Event."
  }

  onTemplateReferanceVariable(value : any){
    console.log(value)
  }

}
