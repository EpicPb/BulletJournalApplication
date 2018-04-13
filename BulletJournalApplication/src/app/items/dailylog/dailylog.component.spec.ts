import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailylogComponent } from './dailylog.component';

describe('DailylogComponent', () => {
  let component: DailylogComponent;
  let fixture: ComponentFixture<DailylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
