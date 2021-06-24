import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
        <h2>Component Interaction</h2>
        <!--<h3>{{parentData}}<h3>-->
        <h3>{{name}}</h3>
        <button (click)="fireEvent()">Send data from child to parent component</button>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  // @Input() public parentData : any;
  @Input('parentData') public name : any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey Codevolution')
  }

}
