import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {
  heroes = [
    { id: 1, name: 'Spiderman', strength: 8 },
    { id: 2, name: 'Wonderful Woman', strength: 24 },
    { id: 3, name: 'Superman', strength: 55 }];
  constructor() { }

  ngOnInit() {
  }

}
