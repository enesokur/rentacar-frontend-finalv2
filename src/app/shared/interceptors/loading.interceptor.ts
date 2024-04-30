import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  let spinner = document.getElementById('spinner');
  spinner?.setAttribute('class', 'container d-flex justify-content-center');
  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        spinner?.setAttribute('class', 'container d-none');
      }
    })
  );
};
