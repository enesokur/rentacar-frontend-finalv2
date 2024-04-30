import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { BrandsPageComponent } from './routers/brands-page/brands-page.component';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';
import { UpdateBrandPageComponent } from './routers/update-brand-page/update-brand-page.component';
import { CreateModelPageComponent } from './routers/create-model-page/create-model-page.component';
import { UpdateModelPageComponent } from './routers/update-model-page/update-model-page.component';
import { ModelDetailsPageComponent } from './routers/model-details-page/model-details-page.component';
import { CustomersPageComponent } from './routers/customers-page/customers-page.component';
import { CarsPageComponent } from './routers/cars-page/cars-page.component';
import { securedRouteGuard } from './shared/guards/secured-route.guard';
import { formGuard } from './shared/guards/form.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'brands',
        component: BrandsPageComponent,
      },
      {
        path: 'brands/createbrand',
        component: CreateBrandPageComponent,
        canActivate: [securedRouteGuard],
        canDeactivate: [formGuard],
      },
      {
        path: 'brands/:id',
        component: UpdateBrandPageComponent,
        canDeactivate: [formGuard],
      },
      {
        path: 'models/createmodel',
        component: CreateModelPageComponent,
        canDeactivate: [formGuard],
      },
      {
        path: 'models/:id',
        component: UpdateModelPageComponent,
        canDeactivate: [formGuard],
      },
      {
        path: 'models/details/:id',
        component: ModelDetailsPageComponent,
      },
      {
        path: 'customers',
        component: CustomersPageComponent,
      },
      {
        path: 'cars',
        component: CarsPageComponent,
      },
    ],
  },
  {
    path: 'testpage',
    component: TestPageComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
];

//! Angular'da Route Guard Eventlerini Araştırınız ve notlar tutunuz.
//? Kullanıcı bir formu doldurup sayfadan ayrılmaya çalıştığında, değişikliklerin kaybolacağını uyararak onay alacak bir guard yapısı hazırlayınız.
//? Http isteğinde bir hata gerçekleştiğinde ekranda hata gösteren bir interceptor oluşturunuz. (örneğin https://www.npmjs.com/package/ngx-toastr kullanabilirsiniz)
//? Her HTTP isteğinin ne kadar sürede tamamlandığını ölçen bir Interceptor oluşturun. Bu, performans sorunlarını tespit etmek için faydalı olabilir.
//? Http isteği gerçekleşirken ekranda yükleme yapıldığına dair bir loader overlay'i gösteren interceptor. (ek bir servis oluşturmanız gerekebilir)
//? Github adresini bizimle paylaşınız.
