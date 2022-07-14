import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit {

  subscription$;

  constructor(){ this.subscription$ = Subscription.EMPTY }

  ngOnInit(){
    const observable$ = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    console.log('just before subscribe');

    this.subscription$ = observable$.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('this is the end')
    );

    console.log('just after subscribe');
  }

  ngOnDestroy(){
    this.subscription$.unsubscribe();
  }

}
