import { Component, Input, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
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

export class JokeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked
{  
  @Input('joke') data: Joke;

  constructor(){
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges(){
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit(){
    console.log(`ngOnInit - data is ${this.data}`);
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}