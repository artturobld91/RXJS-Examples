import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject-example',
  templateUrl: './behavior-subject-example.component.html',
  styleUrls: ['./behavior-subject-example.component.css']
})
export class BehaviorSubjectExampleComponent implements OnInit {

  mySubject$;

  constructor() { }

  ngOnInit(): void {
    this.mySubject$ = new BehaviorSubject(200);
    this.mySubject$.subscribe(x => console.log('first subscribe', x));
    this.mySubject$.next(1);
    this.mySubject$.next(2);

    this.mySubject$.subscribe(x => console.log('second subscribe', x));
    this.mySubject$.next(3);
  }

  ngOnDestroy(){
    this.mySubject$.unsubscribe();
  }

}
