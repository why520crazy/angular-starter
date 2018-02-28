import { Component } from '@angular/core';
const template = require('./app.component.html');

@Component({
  selector: 'app-root',
  template: template
  // templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Worktile Mission';

  constructor() {
    // alert((parent as any).appGlobal);
  }
}
