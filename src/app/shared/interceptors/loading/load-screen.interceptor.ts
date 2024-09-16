import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Inject } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadScreenInterceptor: HttpInterceptorFn = (req, next) => {
  let _NgxSpinnerService: NgxSpinnerService = inject(NgxSpinnerService);
  _NgxSpinnerService.show()
  return next(req).pipe(finalize(()=> {_NgxSpinnerService.hide()}));
};
