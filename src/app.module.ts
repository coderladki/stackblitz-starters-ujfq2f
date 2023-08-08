import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
// import { TodoComponent } from './todo.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  //declarations: [ AppComponent
  //, HelloComponent, TodoComponent
  //],
  // bootstrap:    [ AppComponent ]
})
export class AppModule {}
