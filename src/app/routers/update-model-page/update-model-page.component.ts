import { Component } from '@angular/core';
import { UpdateModelFormComponent } from '../../features/models/components/update-model-form/update-model-form.component';

@Component({
  selector: 'app-update-model-page',
  standalone: true,
  imports: [UpdateModelFormComponent],
  templateUrl: './update-model-page.component.html',
  styleUrl: './update-model-page.component.scss',
})
export class UpdateModelPageComponent {}
