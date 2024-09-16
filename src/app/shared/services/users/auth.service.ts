import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { signIn, signUp } from '../../models/auth';
import { environment } from '../../Environment/baseUrl';
import { MyplatformService } from '../platform/myplatform.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDecode: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _MyplatformService: MyplatformService) {
    if(_MyplatformService.getPlatform()){
      if(localStorage.getItem('socialToken') != null){
        this.userTokenDecode()
      }
    }
   }

  signUp(data :signUp): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/users/signup`, data)
  }

  signIn(data: signIn): Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/users/signin`, data)
  }

  getUserData(): Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/users/profile-data`)
  }

  changePassword(data : any): Observable<any>{
    return this._HttpClient.patch(`${environment.baseUrl}/users/change-password` , data)
  }

  userTokenDecode(){
    this.userDecode.next(jwtDecode(JSON.stringify(localStorage.getItem('socialToken'))));
  }
}
