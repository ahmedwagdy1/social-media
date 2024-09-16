import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/services/users/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private _AuthService:AuthService, private _Router: Router, private _ToastrService:ToastrService){}

  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    dateOfBirth: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required, Validators.pattern(/female|male/)])
  }, this.passwordMatch)

  passwordMatch(g: any) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null
    }
    else {
      return { 'passwordMatched': true }
    }
  }

  sendSignUp(){
    if(this.signUpForm.valid){
      this._AuthService.signUp(this.signUpForm.value).subscribe((res)=>{
        this._Router.navigate(['/signin'])
      })
    }
    else{
      this._ToastrService.error('validation error')
    }
  }
}
