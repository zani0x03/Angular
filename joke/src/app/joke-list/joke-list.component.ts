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
    // this.jokes = [{
    //   setup: "What did the cheese say when it looked int the mirror?",
    //   punchline: "Hello-Me (Halloumi)",
    //   hide:true
    // },
    // {
    //   setup: "What kind of cheese say when it looked int the mirror?",
    //   punchline: "Mask a pony",
    //   hide:true
    // },
    // {
    //   setup: "A kid",
    //   punchline: "I thought",
    //   hide:true
    // }]

    this.jokes = [
      new Joke("What did the cheese say when it looked int the mirror?",
        "Hello-Me (Halloumi)"),
        new Joke("What kind of cheese say when it looked int the mirror?",
        "Mask a pony"),
        new Joke("A kid",
        "I thought"),
    ]
  }

  // toggle(joke){
  //   joke.hide = !joke.hide;
  // }


}
