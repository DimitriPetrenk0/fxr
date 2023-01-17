import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fxr';
  handleClick(event: any) {
    console.log(event);
};
  printear(){
    console.log("hice algo")
  }
}
