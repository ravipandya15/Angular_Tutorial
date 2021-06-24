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
    
  `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public displayName = false
  public displayName2 = false
  constructor() { }

  ngOnInit(): void {
  }

}
