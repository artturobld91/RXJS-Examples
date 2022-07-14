import { Component, OnInit } from '@angular/core';
import { interval, take, Observable } from 'rxjs';

@Component({
  selector: 'app-take-example',
  templateUrl: './take-example.component.html',
  styleUrls: ['./take-example.component.css']
})
export class TakeExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const numbers$ = interval(1000).pipe(take(4));
    numbers$.subscribe(x => console.log(x));
  }

}