import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error: any) => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error?.errors) {
              throw error.error;
            } else {
              toastr.error(error.error?.message || 'Bad Request', 'Error 400');
            }
            break;
          case 401:
            toastr.error(error.error?.message || 'Unauthorized', 'Error 401');
            break;
          case 404:
            router.navigateByUrl('/not-found');
            break;
          case 500:
            const navigationExtras: NavigationExtras = { state: { error: error.error } };
            router.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            toastr.error('An unexpected error occurred', `Error ${error.status}`);
            console.error('Unexpected error:', error);
        }
      }
      return throwError(() => error);
    })
  );
};
