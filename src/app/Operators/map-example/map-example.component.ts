import { Component, OnInit } from '@angular/core';
import { interval, take, Observable, map } from 'rxjs';

@Component({
  selector: 'app-map-example',
  templateUrl: './map-example.component.html',
  styleUrls: ['./map-example.component.css']
})
export class MapExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const numbers$ = interval(1000).pipe(
                                          take(4),
                                          map(x => x * 10)
                                          );
    numbers$.subscribe(x => console.log(x));
  }

}
