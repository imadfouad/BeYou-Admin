import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineupdateComponent } from './domaineupdate.component';

describe('DomaineupdateComponent', () => {
  let component: DomaineupdateComponent;
  let fixture: ComponentFixture<DomaineupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaineupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
