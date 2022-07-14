import { Component, OnInit } from '@angular/core';
import { interval, take, map, filter, mergeMap, of, Observable } from 'rxjs';

@Component({
  selector: 'app-merge-map-example',
  templateUrl: './merge-map-example.component.html',
  styleUrls: ['./merge-map-example.component.css']
})
export class MergeMapExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const numbers$ = interval(1000);
    const letters$ = of('a','b','c','d','e');

    letters$.pipe(
              mergeMap(x => 
                numbers$.pipe(
                  take(5),
                  map(i => i + x)
                )
              )
    ).subscribe(x => console.log(x));
    
  }

}
