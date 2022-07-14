import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './Subject/subject/subject.component';
import { ObservableExampleComponent } from './Observable/observable-example/observable-example.component';
import { BehaviorSubjectExampleComponent } from './BehaviorSubject/behavior-subject-example/behavior-subject-example.component';
import { ReplaySubjectExampleComponent } from './ReplaySubject/replay-subject-example/replay-subject-example.component';
import { TakeExampleComponent } from './Operators/take-example/take-example.component';
import { MapExampleComponent } from './Operators/map-example/map-example.component';
import { FilterExampleComponent } from './Operators/filter-example/filter-example.component';
import { MergeMapExampleComponent } from './Operators/merge-map-example/merge-map-example.component';
import { SwitchMapExampleComponent } from './Operators/switch-map-example/switch-map-example.component';
import { DebounceExampleComponent } from './Debounce/debounce-example/debounce-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    ObservableExampleComponent,
    BehaviorSubjectExampleComponent,
    ReplaySubjectExampleComponent,
    TakeExampleComponent,
    MapExampleComponent,
    FilterExampleComponent,
    MergeMapExampleComponent,
    SwitchMapExampleComponent,
    DebounceExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
