import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { CounterComponentComponent } from '../../shared/components/counter-component/counter-component.component';
import { WelcomeDirective } from '../../core/directives/welcome.directive';
import { BrandsListComponent } from '../../features/brands/components/brands-list/brands-list.component';
import { RouterModule } from '@angular/router';
import { MultipleDirective } from '../../core/directives/multiple.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MainLayoutComponent,
    CounterComponentComponent,
    WelcomeDirective,
    BrandsListComponent,
    RouterModule,
    MultipleDirective,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
