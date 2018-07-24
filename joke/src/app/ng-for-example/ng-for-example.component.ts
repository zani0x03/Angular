import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  people: any[] = [
    {"name": "Teste 1"},
    {"name": "Teste 2"},
    {"name": "Teste 3"},
    {"name": "Teste 4"},
    {"name": "Teste 5"},
    {"name": "Teste 6"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
