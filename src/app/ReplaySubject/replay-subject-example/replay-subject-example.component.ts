import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Component({
  selector: 'app-replay-subject-example',
  templateUrl: './replay-subject-example.component.html',
  styleUrls: ['./replay-subject-example.component.css']
})
export class ReplaySubjectExampleComponent implements OnInit {

  mySubject$;

  constructor() { }

  ngOnInit(): void {
    this.mySubject$ = new ReplaySubject();
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
