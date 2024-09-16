import { ChangeDetectorRef, Component } from '@angular/core';
import { PostService } from '../../../shared/services/posts/post.service';
import { AuthService } from '../../../shared/services/users/auth.service';
import { UserData } from '../../../shared/models/user-data';
import { UserPost } from '../../../shared/models/user-post';
import { CreatePostComponent } from "../create-post/create-post.component";
import { CommentsComponent } from "../comments/comments.component";
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CreatCommentComponent } from "../creat-comment/creat-comment.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CreatePostComponent, CommentsComponent, FormsModule, DatePipe, CreatCommentComponent ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {
  constructor(private _PostService: PostService, private _AuthService:AuthService, private _ChangeDetectorRef: ChangeDetectorRef){}

  userData !: UserData;
  userId !: string;
  myPosts !: UserPost[];

  ngOnInit(): void{
    this._AuthService.getUserData().subscribe((res)=> {
      console.log(res.user);
      this.userData = res.user;
      this.userId = res.user._id;
      this.getAllPosts();
    }) 
  }

  getAllPosts(){
    this._PostService.getUserPosts(this.userId).subscribe((res)=>{
      console.log(res.posts);
      this.myPosts = res.posts;
    })
  }

  ngAfterViewChecked() {
    this._ChangeDetectorRef.detectChanges();
  }

  editPost(id: string){
    
  }

  // insertImg(evet : Event){}

  // sendData(){}

  deletePost(postId: string){
    this._PostService.deletePost(postId).subscribe((res)=>{
      console.log(res);
      
    })
  }


}