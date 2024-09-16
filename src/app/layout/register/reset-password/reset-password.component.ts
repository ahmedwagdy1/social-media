import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyplatformService } from '../../../shared/services/platform/myplatform.service';
import { AuthService } from '../../../shared/services/users/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  constructor(private _MyplatformService:MyplatformService , private _AuthService:AuthService , private _Router:Router , private _ToastrService:ToastrService){}

  myChamgePass : FormGroup = new FormGroup({

    password : new FormControl(null , [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    newPassword : new FormControl(null , [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)])
  })

  formSubmit(){
    this._AuthService.changePassword(this.myChamgePass.value).subscribe( {
      next : (res)=>{
      if (this._MyplatformService.getPlatform()) {
        localStorage.setItem('socialToken', res.token)
      }
      this._AuthService.userTokenDecode()
      this._Router.navigate(['/home'])
        console.log(res);
      },
      error : (err)=>{
        // this._ToastrService.error('Validation Error')
        console.log(err);
      }
    })
  }


}
