import { Component } from '@angular/core';
import { UpdateBrandFormComponent } from '../../features/brands/components/update-brand-form/update-brand-form.component';

@Component({
  selector: 'app-update-brand-page',
  standalone: true,
  imports: [UpdateBrandFormComponent],
  templateUrl: './update-brand-page.component.html',
  styleUrl: './update-brand-page.component.scss',
})
export class UpdateBrandPageComponent {}
