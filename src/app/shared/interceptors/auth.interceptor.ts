import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('authInterceptor', req.url);
  const token = localStorage.getItem('token')!;
  const newReq = req.clone({
    headers: req.headers.set('Authorization', token),
  });
  return next(newReq);
};
