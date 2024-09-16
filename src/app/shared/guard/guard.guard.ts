import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/users/auth.service';
import { inject } from '@angular/core';
import { MyplatformService } from '../services/platform/myplatform.service';

export const guardGuard: CanActivateFn = (route, state) => {
  let _AuthService: AuthService = inject(AuthService)
  let _Router: Router = inject(Router)
  let _MyplatformService: MyplatformService = inject(MyplatformService)
  
  if(_MyplatformService.getPlatform()){
    if (localStorage.getItem('socialToken')!= null){
      _AuthService.userTokenDecode();
      return true;
    }
    else{
      _Router.navigate(['/signin'])
      return false
    }
  }
  else{
    return false
  }  
};