import { Component } from '@angular/core';
import { Joke } from '../class/joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  jokes: Joke[];

  constructor() { 
    this.jokes = [
      new Joke("What did the cheese say when it looked int the mirror?",
        "Hello-Me (Halloumi)"),
        new Joke("What kind of cheese say when it looked int the mirror?",
        "Mask a pony"),
        new Joke("A kid",
        "I thought")
    ]
  }

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
