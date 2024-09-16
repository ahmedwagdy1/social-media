import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MyplatformService } from '../../services/platform/myplatform.service';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  let socialToken: any
  let _MyplatformService: MyplatformService = inject(MyplatformService)  
  
  if(_MyplatformService.getPlatform()){
    if(localStorage.getItem('socialToken') !== null){
      socialToken = {token : localStorage.getItem('socialToken')};
    } 
  }
  
  req = req.clone({
    setHeaders: socialToken
  })
  return next(req);
};
