import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink = "/">Home</a></li>
    <li><a routerLink = "/about">About us</a></li>
  </ul>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { }