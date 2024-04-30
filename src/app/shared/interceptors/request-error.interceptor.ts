import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';

export const requestErrorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((err: any) => {
      toastr.error(err.message);
      throw err;
    })
  );
};
