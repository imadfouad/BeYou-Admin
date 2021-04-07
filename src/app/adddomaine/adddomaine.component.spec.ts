import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddomaineComponent } from './adddomaine.component';

describe('AdddomaineComponent', () => {
  let component: AdddomaineComponent;
  let fixture: ComponentFixture<AdddomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
