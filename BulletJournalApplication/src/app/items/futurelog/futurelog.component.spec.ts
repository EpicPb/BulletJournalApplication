import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturelogComponent } from './futurelog.component';

describe('FuturelogComponent', () => {
  let component: FuturelogComponent;
  let fixture: ComponentFixture<FuturelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
