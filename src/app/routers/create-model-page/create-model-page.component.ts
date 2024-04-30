import { Component } from '@angular/core';
import { CreateModelFormComponent } from '../../features/models/components/create-model-form/create-model-form.component';

@Component({
  selector: 'app-create-model-page',
  standalone: true,
  imports: [CreateModelFormComponent],
  templateUrl: './create-model-page.component.html',
  styleUrl: './create-model-page.component.scss',
})
export class CreateModelPageComponent {}
