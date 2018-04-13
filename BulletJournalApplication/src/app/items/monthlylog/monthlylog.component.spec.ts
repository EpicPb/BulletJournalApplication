import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlylogComponent } from './monthlylog.component';

describe('MonthlylogComponent', () => {
  let component: MonthlylogComponent;
  let fixture: ComponentFixture<MonthlylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
