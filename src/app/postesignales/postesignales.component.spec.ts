import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostesignalesComponent } from './postesignales.component';

describe('PostesignalesComponent', () => {
  let component: PostesignalesComponent;
  let fixture: ComponentFixture<PostesignalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostesignalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostesignalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
