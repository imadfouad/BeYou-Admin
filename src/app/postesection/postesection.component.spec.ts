import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostesectionComponent } from './postesection.component';

describe('PostesectionComponent', () => {
  let component: PostesectionComponent;
  let fixture: ComponentFixture<PostesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
