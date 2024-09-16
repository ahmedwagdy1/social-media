import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCommentComponent } from './creat-comment.component';

describe('CreatCommentComponent', () => {
  let component: CreatCommentComponent;
  let fixture: ComponentFixture<CreatCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
