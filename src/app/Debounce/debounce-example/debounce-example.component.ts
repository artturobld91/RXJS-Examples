import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, debounceTime, Subject } from 'rxjs';
@Component({
  selector: 'app-debounce-example',
  templateUrl: './debounce-example.component.html',
  styleUrls: ['./debounce-example.component.css']
})

//Delays the input of the observable.

export class DebounceExampleComponent implements OnInit {

  searchString:string = '';
  searchSubjects$ = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    //fromEvent(document, 'click').subscribe(x => console.log(x));
    this.searchSubjects$.pipe(
      debounceTime(200)
    ).subscribe(x => console.log('debounced: ', x));
  }

  inputChanged($event){
    console.log('input changed', $event);
    this.searchSubjects$.next($event);
  }
}
