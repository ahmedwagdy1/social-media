import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../../shared/services/posts/post.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  constructor(private _PostService: PostService) { }

  selectedFile: File | null = null;
  content: string = '';

  insertImg(eventData: Event) {
    let input = eventData.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0]
    }

  }

  sendData() {
    let formData = new FormData()
    formData.append('body', this.content);
    formData.append('image', this.selectedFile!)

    this._PostService.createPost(formData).subscribe((res) => {
      console.log(res);

    })

  }
}
