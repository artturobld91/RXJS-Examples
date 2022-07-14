import { Component, OnInit } from '@angular/core';
import { interval, take, map, filter } from 'rxjs';

@Component({
  selector: 'app-filter-example',
  templateUrl: './filter-example.component.html',
  styleUrls: ['./filter-example.component.css']
})
export class FilterExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const numbers$ = interval(1000).pipe(
                                          take(4),
                                          map(x => x * 10),
                                          filter( x => x > 20)
                                          );
    numbers$.subscribe(x => console.log(x));
  }

}
