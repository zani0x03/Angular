import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../class/joke';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>()

  createJoke(setup: string, punchline: string){
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  constructor() { }

  ngOnInit() {
  }

}
