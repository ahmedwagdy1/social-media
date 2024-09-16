import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/services/users/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  userToken !: any

  constructor(private _AuthService:AuthService, private _Router: Router, private _ToastrService:ToastrService ){}

  signInForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
  })

 

  sendSignIn(){
    if(this.signInForm.valid){
      this._AuthService.signIn(this.signInForm.value).subscribe((res)=>{
        this.userToken = res.token;
        localStorage.setItem('socialToken', this.userToken);
        this._AuthService.userTokenDecode()        
        this._Router.navigate(['/home']);
      })
    }
    else{
      this._ToastrService.error('Validation Error')
    }
    
  }
}