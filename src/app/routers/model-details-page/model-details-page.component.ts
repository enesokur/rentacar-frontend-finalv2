import { Component } from '@angular/core';
import { ModelDetailsComponent } from '../../features/models/components/model-details/model-details.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-details-page',
  standalone: true,
  imports: [ModelDetailsComponent],
  templateUrl: './model-details-page.component.html',
  styleUrl: './model-details-page.component.scss',
})
export class ModelDetailsPageComponent {
  modelId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getModelIdFromRoute();
  }

  private getModelIdFromRoute() {
    this.route.params
      .subscribe((params) => {
        this.modelId = params['id'];
      })
      .unsubscribe();
    console.log(this.modelId);
  }
}
