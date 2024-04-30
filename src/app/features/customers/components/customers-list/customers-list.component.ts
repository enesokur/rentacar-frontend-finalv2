import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomersApiService } from '../../services/customers-api.service';
import { CustomersListItemDto } from '../../models/customers-list-item-dto';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent implements OnInit {
  customers!: Array<CustomersListItemDto>;

  constructor(private customersApiService: CustomersApiService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customersApiService.getCustomers().subscribe((response) => {
      this.customers = response;
    });
  }
}
