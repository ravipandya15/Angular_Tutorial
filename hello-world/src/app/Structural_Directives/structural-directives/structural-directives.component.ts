import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
    <h1>Structural Directives</h1>
    <h2>ngIf directive</h2>
    <h3 *ngIf="displayName; else elseBlock">
      Codevaluation
    </h3>

    <ng-template #elseBlock>
      <h3>
        Name is hidden
      </h3>
    </ng-template>

    <h2>Alternate way</h2>
    <div *ngIf="displayName2; then thenBlock; else elseBlock1">
    </div>
    <ng-template #thenBlock>
      <h3>ThenBlock</h3>
    </ng-template>

    <ng-template #elseBlock1>
      <h3>ElseBlock</h3>
    </ng-template>

    <h2>ngSwitch directive</h2>
    <div [ngSwitch]="color">
      <h3 *ngSwitchCase="'red'">You picked Red Color</h3>
      <h3 *ngSwitchCase="'blue'">You picked Blue Color</h3>
      <h3 *ngSwitchCase="'green'">You picked Green Color</h3>
      <h3 *ngSwitchDefault>Pick Again</h3>
    </div>

    <h2>ngFor directive</h2>
    <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
      <h3>{{i}} : {{f}} : {{l}} : {{o}} : {{e}} :{{color}}</h3>
    </div>
  `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public displayName = false
  public displayName2 = false
  public color = "orange";
  public colors = ["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
