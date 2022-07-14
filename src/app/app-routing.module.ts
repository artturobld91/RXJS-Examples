import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectExampleComponent } from './BehaviorSubject/behavior-subject-example/behavior-subject-example.component';
import { DebounceExampleComponent } from './Debounce/debounce-example/debounce-example.component';
import { ObservableExampleComponent } from './Observable/observable-example/observable-example.component';
import { MapExampleComponent } from './Operators/map-example/map-example.component';
import { MergeMapExampleComponent } from './Operators/merge-map-example/merge-map-example.component';
import { SwitchMapExampleComponent } from './Operators/switch-map-example/switch-map-example.component';
import { TakeExampleComponent } from './Operators/take-example/take-example.component';
import { ReplaySubjectExampleComponent } from './ReplaySubject/replay-subject-example/replay-subject-example.component';
import { SubjectComponent } from './Subject/subject/subject.component';

const routes: Routes = [
  {path: 'observable', component: ObservableExampleComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'behaviorsubject', component: BehaviorSubjectExampleComponent},
  {path: 'replaysubject', component: ReplaySubjectExampleComponent},
  {path: 'take', component: TakeExampleComponent},
  {path: 'map', component: MapExampleComponent},
  {path: 'mergemap', component: MergeMapExampleComponent},
  {path: 'switchmap', component: SwitchMapExampleComponent},
  {path: 'debounce', component: DebounceExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
