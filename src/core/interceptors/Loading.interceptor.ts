import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  let ngxSpinnerService: NgxSpinnerService = inject(NgxSpinnerService);

  if ((req.method === 'POST' && req.url.includes('orders')) ||
    req.method === 'DELETE' ||
    req.url.includes('emailexists')) {
    return next(req);
  }

  ngxSpinnerService.show();

  return next(req).pipe(finalize(() => {
    ngxSpinnerService.hide();
  }));
};
