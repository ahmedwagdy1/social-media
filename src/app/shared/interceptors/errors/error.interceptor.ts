import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  let _ToastrService: ToastrService = inject(ToastrService)
  return next(req).pipe(catchError((err) => {
    _ToastrService.error(err.error.error);    
    console.log(err);
    console.log(err.error.error);
    
    return throwError(() => err)
  }));
};
