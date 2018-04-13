import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnorganizedlistComponent } from './unorganizedlist.component';

describe('UnorganizedlistComponent', () => {
  let component: UnorganizedlistComponent;
  let fixture: ComponentFixture<UnorganizedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnorganizedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnorganizedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
