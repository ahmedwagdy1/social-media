import { environment } from './../../Environment/baseUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpClient: HttpClient) { }

  createComment(content: string): Observable<any>{
    return this._httpClient.post(`${environment.baseUrl}/comments`, content)
  }

  getPostComment(postId: string): Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/posts/${postId}/comments`)
  }
  
  updateComment(commentId: string, content: string): Observable<any>{
    return this._httpClient.put(`${environment.baseUrl}/comments/${commentId}` , content)
  }

  deleteComment(commentId: string): Observable<any>{
    return this._httpClient.delete(`${environment.baseUrl}/comments/${commentId}`)
  }
}
