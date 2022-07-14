import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceExampleComponent } from './debounce-example.component';

describe('DebounceExampleComponent', () => {
  let component: DebounceExampleComponent;
  let fixture: ComponentFixture<DebounceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
