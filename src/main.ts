import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, timeout } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  constructor() {
    console.log('constructor() invoked!');
    this.callingApi().subscribe((res) => {
      console.log(res);
    });
  }
  ngOnInit(): void {
    console.log('ngOninit() invoked!');
  }

  callingApi(): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('api returned data.');
      }, 5000);
    });
  }
}

bootstrapApplication(App);
