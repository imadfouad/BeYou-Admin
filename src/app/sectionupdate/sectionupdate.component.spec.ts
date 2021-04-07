import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionupdateComponent } from './sectionupdate.component';

describe('SectionupdateComponent', () => {
  let component: SectionupdateComponent;
  let fixture: ComponentFixture<SectionupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
