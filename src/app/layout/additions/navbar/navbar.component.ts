import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MyplatformService } from '../../../shared/services/platform/myplatform.service';
import { AuthService } from '../../../shared/services/users/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLogin!: boolean;
  userImg! :string
  constructor(private _Router: Router, private _MyplatformService: MyplatformService, private _AuthService: AuthService){}
  
  ngOnInit(): void{
    this._AuthService.userDecode.subscribe(()=>{
      if(this._AuthService.userDecode.getValue() == null){
        this.isLogin = false;
      }
      else{
        this.isLogin = true;
        this.getUserData()
      }
    })
  }

  logout(){
    localStorage.removeItem('socialToken');
    this._Router.navigate(['/signin']);
    this._AuthService.userDecode.next(null)
  }

  getUserData(){
    this._AuthService.getUserData().subscribe((res)=>{
      this.userImg = res.user.photo
    })
  }
}
