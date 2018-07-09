import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Object[];

  constructor() { 
    this.jokes = [{
      setup: "What did the cheese say when it looked int the mirror?",
      punchline: "Hello-Me (Halloumi)"
    },
    {
      setup: "What kind of cheese say when it looked int the mirror?",
      punchline: "Mask a pony"
    },
    {
      setup: "A kid",
      punchline: "I thought"
    }]
  }

  ngOnInit() {
  }

}
