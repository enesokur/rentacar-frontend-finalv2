import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModelsApiService } from '../../services/models-api.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UpdateModelRequest } from '../../models/update-model-request';
import { DataManageService } from '../../../../shared/services/data-manage.service';
import { ModelsListItemDto } from '../../models/models-list-item-dto';
import { BrandsListItemDto } from '../../../brands/models/brands-list-item-dto';
import { BrandsApiService } from '../../../brands/services/brands-api.service';
import { ErrorMessagesPipe } from '../../../../core/pipes/error-messages.pipe';

@Component({
  selector: 'app-update-model-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ErrorMessagesPipe],
  templateUrl: './update-model-form.component.html',
  styleUrl: './update-model-form.component.scss',
})
export class UpdateModelFormComponent implements OnInit {
  private modelId: string | null = null;
  allBrands: Array<BrandsListItemDto> = [];

  modelToUpdate: ModelsListItemDto = {
    id: 0,
    name: '',
    brandId: 0,
    imageUrl: '',
    modelYear: 0,
    dailyPrice: 0,
    brand: {
      id: 0,
      name: '',
    },
  };

  ngOnInit(): void {
    this.route.params.subscribe(
      (response: Params) => (this.modelId = response['id'])
    );
    this.brandsApiService.getList().subscribe((response) => {
      this.allBrands = response;
      this.change.markForCheck();
      console.log(this.allBrands);
    });
    this.dataManageService.data$
      .subscribe({
        next: (response) => {
          console.log(response);
          this.modelToUpdate = response;
          this.form.get('name')?.setValue(this.modelToUpdate.name);
          this.form.get('brandName')?.setValue(this.modelToUpdate.brand.name);
          this.form.get('modelYear')?.setValue(this.modelToUpdate.modelYear);
          this.form.get('dailyPrice')?.setValue(this.modelToUpdate.dailyPrice);
          this.change.markForCheck();
        },
      })
      .unsubscribe();
    this.form.valueChanges.subscribe(() => {
      this.dataManageService.setHasChanged(true);
    });
  }

  form: FormGroup = this.fb.group({
    brandName: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    modelYear: [
      '',
      [Validators.required, Validators.min(2000), Validators.max(2024)],
    ],
    dailyPrice: ['', [Validators.required, Validators.min(1250)]],
  });

  constructor(
    private fb: FormBuilder,
    private modelsApiService: ModelsApiService,
    private brandsApiService: BrandsApiService,
    private dataManageService: DataManageService,
    private change: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  updateModel() {
    const brand = this.allBrands.find(
      (brand) => brand.name == this.form.value.brandName
    );
    const request: UpdateModelRequest = {
      brandId: brand!.id,
      name: this.form.value.name,
      modelYear: this.form.value.modelYear,
      imageUrl: this.modelToUpdate.imageUrl,
      dailyPrice: this.form.value.dailyPrice,
      brand: brand!,
    };

    this.modelsApiService.putModel(request, this.modelId).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Model created successfully');
        this.form.reset();
      },
    });
  }

  onFormSubmit() {
    console.log(this.form);
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.error('form is invalid');
      return;
    } else {
      this.updateModel();
      this.dataManageService.setHasChanged(false);
      this.router.navigate(['/home/brands']);
    }
  }
}
