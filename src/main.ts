import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, timeout } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  url = 'https://dummyjson.com/products/1';

  todo: any;

  constructor() {
    console.log('constructor() invoked!');
    this.fetchData();
    var p = this.callingApi();
    console.log('p', p);
    // .subscribe((res) => {
    //   console.log(res);
    // });
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

    setTimeout(()=>{

    },1000)

  }
  async fetchData() {
    //const data = await this.httpClient.get(this.url).toPromise();
    // this.todo = data;
    // console.log('Data: ' + JSON.stringify(data));

    const data = await fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((json) => console.log(json));

    this.todo = data;
    console.log('Data: ' + JSON.stringify(data));
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
