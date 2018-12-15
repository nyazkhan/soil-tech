import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JounralComponent } from './jounral.component';

describe('JounralComponent', () => {
  let component: JounralComponent;
  let fixture: ComponentFixture<JounralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JounralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JounralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
