import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteabonnesComponent } from './specialiteabonnes.component';

describe('SpecialiteabonnesComponent', () => {
  let component: SpecialiteabonnesComponent;
  let fixture: ComponentFixture<SpecialiteabonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteabonnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiteabonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
