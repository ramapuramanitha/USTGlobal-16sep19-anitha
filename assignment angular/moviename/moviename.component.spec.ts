import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovienameComponent } from './moviename.component';

describe('MovienameComponent', () => {
  let component: MovienameComponent;
  let fixture: ComponentFixture<MovienameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovienameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovienameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
