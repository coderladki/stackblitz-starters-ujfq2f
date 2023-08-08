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
    setTimeout(() => {
      console.log('waiting over...');
    }, 5000);
  }
  ngOnInit(): void {
    console.log('ngOninit() invoked!');
  }

  callingApi(): Observable<any> {
    console.log('callingApi() invoked!');
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('api returned data.');
      }, 1000);
    });
  }

  async delay() {
    console.log('delay() invoked!');
    return await new Promise(() =>
      setTimeout(() => {
        console.log('waiting over...');
      }, 10000)
    );
  }
}

bootstrapApplication(App);
