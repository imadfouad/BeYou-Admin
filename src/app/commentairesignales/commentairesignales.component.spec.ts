import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairesignalesComponent } from './commentairesignales.component';

describe('CommentairesignalesComponent', () => {
  let component: CommentairesignalesComponent;
  let fixture: ComponentFixture<CommentairesignalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentairesignalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentairesignalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
