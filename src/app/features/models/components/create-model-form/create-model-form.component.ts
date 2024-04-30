import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ModelsApiService } from '../../services/models-api.service';
import { PostModelRequest } from '../../models/post-model-request';
import { CommonModule } from '@angular/common';
import { BrandsApiService } from '../../../brands/services/brands-api.service';
import { BrandsListItemDto } from '../../../brands/models/brands-list-item-dto';
import { ErrorMessagesPipe } from '../../../../core/pipes/error-messages.pipe';
import { DataManageService } from '../../../../shared/services/data-manage.service';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ErrorMessagesPipe],
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelFormComponent implements OnInit {
  allBrands: Array<BrandsListItemDto> = [];

  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.allBrands = response;
      this.change.markForCheck();
      console.log(this.allBrands);
    });
    this.form.valueChanges.subscribe(() => {
      this.dataManageService.setHasChanged(true);
    });
  }
  form: FormGroup = this.fb.group({
    brandName: ['', [Validators.required, Validators.minLength(3)]],
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
    private router: Router,
    private change: ChangeDetectorRef
  ) {}

  createModel() {
    const brand = this.allBrands.find(
      (brand) => brand.name == this.form.value.brandName
    );
    console.log(brand);
    const request: PostModelRequest = {
      brandId: brand!.id,
      name: this.form.value.name,
      imageUrl: 'No image',
      modelYear: this.form.value.modelYear,
      dailyPrice: this.form.value.dailyPrice,
      brand: brand!,
    };
    this.modelsApiService.postModel(request).subscribe({
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
      this.createModel();
      this.router.navigate(['/home/brands']);
    }
  }
}
