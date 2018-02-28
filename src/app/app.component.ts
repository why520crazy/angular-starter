import { Component } from '@angular/core';
// const template = require('./app.component.html');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular + Webpack App';

  constructor() {
    // alert((parent as any).appGlobal);
  }
}
