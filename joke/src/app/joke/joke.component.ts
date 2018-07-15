import { Component, Input } from '@angular/core';
import { Joke } from '../class/joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
// export class JokeComponent implements OnInit {
//   joke: Joke;
//   setup: string;
//   punchline: string;

//   constructor() { 
//     this.setup = "What did te cheese say when it looked in the mirror?";
//     this.punchline = "Halloumi (Hello Me)";
//   }

//   ngOnInit() {
//   }

// }

export class JokeComponent{  
  @Input('joke') data: Joke;
}