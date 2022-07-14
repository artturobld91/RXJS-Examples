import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  mySubject$;

  constructor() { }

  ngOnInit(): void {
    this.mySubject$ = new Subject();
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
