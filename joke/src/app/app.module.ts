import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
