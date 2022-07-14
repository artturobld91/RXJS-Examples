import { Component, OnInit } from '@angular/core';
import { interval, take, map, filter, switchMap, of, Observable } from 'rxjs';

@Component({
  selector: 'app-switch-map-example',
  templateUrl: './switch-map-example.component.html',
  styleUrls: ['./switch-map-example.component.css']
})
export class SwitchMapExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const numbers$ = interval(1000);
    const letters$ = of('a','b','c','d','e');

    letters$.pipe(
              switchMap(x => 
                numbers$.pipe(
                  take(5),
                  map(i => i + x)
                )
              )
    ).subscribe(x => console.log(x));

  }
}
