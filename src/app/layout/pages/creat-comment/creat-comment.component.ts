import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommentService } from '../../../shared/services/comments/comment.service';
import { Comment } from '../../../shared/models/comment';

@Component({
  selector: 'app-creat-comment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './creat-comment.component.html',
  styleUrl: './creat-comment.component.css'
})
export class CreatCommentComponent {
  constructor(private _CommentService:CommentService){}

  commentForm !: FormGroup 
  allComments !: Comment[]
  @Input() postId !: string

  ngOnChanges(): void{
    this.commentForm = new FormGroup({
      content : new FormControl(null),
      post: new FormControl(this.postId),
    })
  }

  sendComment(){
    this._CommentService.createComment(this.commentForm.value).subscribe((res)=> {
      this.commentForm.get('content')?.setValue(null);
      console.log(res);
      this.allComments = res.comments;
    })
  }

}
