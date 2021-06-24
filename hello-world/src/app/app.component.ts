import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  public name = "Ravi Pandya"
  public childName = "";

  executeEvent(message : any){
    this.childName = message;
  }
}
