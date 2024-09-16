import { Component, Input } from '@angular/core';
import { CommentService } from '../../../shared/services/comments/comment.service';
import { Comment } from '../../../shared/models/comment';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../shared/services/users/auth.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  @Input() postId !: string
  allComments !: Comment[]
  isLogin !: boolean 
  constructor(private _CommentService: CommentService , private _AuthService:AuthService){} 
  
  ngOnInit(): void{

    if(this._AuthService.userDecode.getValue() == null){
      this.isLogin = false;
    }
    else{
      this.isLogin = true;
    }

    this._CommentService.getPostComment(this.postId).subscribe((res)=>{
      console.log(res.comments);
      this.allComments = res.comments;     
    })
  }
}
