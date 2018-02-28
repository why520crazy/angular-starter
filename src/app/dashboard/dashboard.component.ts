import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
    <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  </div>
  `
})
export class DashboardComponent implements OnInit {

    title: string;

    constructor() {
        this.title = `Angular + Webpack App`;
    }

    ngOnInit(): void {
    }
}
