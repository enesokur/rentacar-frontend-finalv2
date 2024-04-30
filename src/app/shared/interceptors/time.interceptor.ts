import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const timeInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = new Date().getTime();
  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        const endTime = new Date().getTime();
        console.log(
          'The time between the response moment and request moment is ' +
            (endTime - startTime)
        );
      }
    })
  );
};
