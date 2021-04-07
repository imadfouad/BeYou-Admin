import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostesComponent } from './userpostes.component';

describe('UserpostesComponent', () => {
  let component: UserpostesComponent;
  let fixture: ComponentFixture<UserpostesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpostesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
