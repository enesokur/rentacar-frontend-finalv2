import { Component } from '@angular/core';
import { CustomersListComponent } from '../../features/customers/components/customers-list/customers-list.component';

@Component({
  selector: 'app-customers-page',
  standalone: true,
  imports: [CustomersListComponent],
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.scss',
})
export class CustomersPageComponent {}
