import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren, ElementRef, AfterContentInit, ContentChild } from '@angular/core';
import { Joke } from '../class/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {

  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked int the mirror?",
      "Hello-Me (Halloumi)"),
      new Joke("What kind of cheese say when it looked int the mirror?",
      "Mask a pony")
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerE1: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  ngAfterContentInit(){
    console.log(`ngAfterContentINit - jokeContentChild is ${this.jokeContentChild}`)
  }

  constructor(){
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngAfterViewInit(){
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
    console.log(`ngAfterViewInit - header is ${this.headerE1}`);
    // no inspection TypeScriptUnresolvedVariable
    this.headerE1.nativeElement.textContent = "Best Joke Machine";
  }



  // constructor() { 
  //   this.jokes = [
  //     new Joke("What did the cheese say when it looked int the mirror?",
  //       "Hello-Me (Halloumi)"),
  //       new Joke("What kind of cheese say when it looked int the mirror?",
  //       "Mask a pony"),
  //       new Joke("A kid",
  //       "I thought")
  //   ]
  // }

  // addJoke(joke){
  //   this.jokes.unshift(joke);
  // }

  addJoke(){
    this.jokes.unshift(new Joke("Joke Main","Joke Description"));
  }


  deleteJoke(){
    this.jokes = []
  }

}
