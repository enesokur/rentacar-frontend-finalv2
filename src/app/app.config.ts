import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { requestErrorInterceptor } from './shared/interceptors/request-error.interceptor';
import { timeInterceptor } from './shared/interceptors/time.interceptor';
import { loadingInterceptor } from './shared/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        requestErrorInterceptor,
        timeInterceptor,
        loadingInterceptor,
      ])
    ),
  ],
};
