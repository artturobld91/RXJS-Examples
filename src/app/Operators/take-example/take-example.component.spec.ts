import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeExampleComponent } from './take-example.component';

describe('TakeExampleComponent', () => {
  let component: TakeExampleComponent;
  let fixture: ComponentFixture<TakeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
