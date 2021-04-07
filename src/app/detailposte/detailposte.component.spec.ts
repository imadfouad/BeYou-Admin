import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailposteComponent } from './detailposte.component';

describe('DetailposteComponent', () => {
  let component: DetailposteComponent;
  let fixture: ComponentFixture<DetailposteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailposteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
