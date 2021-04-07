import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspecialiteComponent } from './addspecialite.component';

describe('AddspecialiteComponent', () => {
  let component: AddspecialiteComponent;
  let fixture: ComponentFixture<AddspecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddspecialiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
