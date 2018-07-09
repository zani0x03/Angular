import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  setup: string;
  punchline: string;

  constructor() { 
    this.setup = "What did te cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (Hello Me)";
  }

  ngOnInit() {
  }

}
