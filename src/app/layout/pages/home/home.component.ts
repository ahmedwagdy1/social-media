import { Post } from './../../../shared/models/post';
import { ChangeDetectorRef, Component } from '@angular/core';
import { PostService } from '../../../shared/services/posts/post.service';
import { CommentsComponent } from "../comments/comments.component";
import { DatePipe } from '@angular/common';
import { CreatePostComponent } from "../create-post/create-post.component";
import { CreatCommentComponent } from "../creat-comment/creat-comment.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommentsComponent, DatePipe, CreatePostComponent, CreatCommentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _PostService: PostService){}
  
  postsArr !: Post[]
  
  ngOnInit(): void{
    this._PostService.getAllPosts().subscribe((res)=>{
      console.log(res.posts);
      this.postsArr = res.posts;
    })
  }
}
