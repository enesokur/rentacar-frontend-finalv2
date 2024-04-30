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
import { BrandsApiService } from '../../services/brands-api.service';
import { UpdateBrandRequest } from '../../models/update-brand-request';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataManageService } from '../../../../shared/services/data-manage.service';
import { BrandsListItemDto } from '../../models/brands-list-item-dto';
import { ErrorMessagesPipe } from '../../../../core/pipes/error-messages.pipe';

@Component({
  selector: 'app-update-brand-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ErrorMessagesPipe],
  templateUrl: './update-brand-form.component.html',
  styleUrl: './update-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBrandFormComponent implements OnInit {
  private brandId: string | null = null;
  private brandToUpdate: BrandsListItemDto = {
    id: 0,
    name: '',
  };
  ngOnInit(): void {
    this.brandId = this.route.snapshot.paramMap.get('id');
    this.dataManageService.data$
      .subscribe({
        next: (response) => {
          console.log(response);
          this.brandToUpdate = response;
          this.form.get('name')?.setValue(this.brandToUpdate.name);
          this.change.markForCheck();
        },
      })
      .unsubscribe();
    this.form.valueChanges.subscribe(() => {
      this.dataManageService.setHasChanged(true);
    });
  }

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private fb: FormBuilder,
    private brandsApiService: BrandsApiService,
    private dataManageService: DataManageService,
    private router: Router,
    private route: ActivatedRoute,
    private change: ChangeDetectorRef
  ) {}

  updateBrand() {
    const request: UpdateBrandRequest = {
      name: this.form.value.name,
    };
    this.brandsApiService.updateBrand(request, this.brandId).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Brand updated successfully');
        this.form.reset();
      },
    });
  }

  onFormSubmit() {
    console.log(this.form);
    console.log(this.form.get('name')?.touched);
    console.log(this.form.get('name')?.dirty);
    this.form.markAsTouched();
    if (this.form.invalid) {
      console.error('form is invalid');
    } else {
      this.updateBrand();
      this.dataManageService.setHasChanged(false);
      this.router.navigate(['/home/brands']);
    }
  }
}
