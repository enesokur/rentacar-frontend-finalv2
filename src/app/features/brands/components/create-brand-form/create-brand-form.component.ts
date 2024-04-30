import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrandsApiService } from '../../services/brands-api.service';
import { PostBrandRequest } from '../../models/post-brand-request';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ErrorMessagesPipe } from '../../../../core/pipes/error-messages.pipe';
import { ButtonDirective } from '../../../../core/directives/button.directive';
import { NoCharacterInputDirective } from '../../../../core/directives/no-character-input.directive';
import { ToastrService } from 'ngx-toastr';
import { DataManageService } from '../../../../shared/services/data-manage.service';

@Component({
  selector: 'app-create-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ErrorMessagesPipe,
    NoCharacterInputDirective,
    ButtonDirective,
  ],
  templateUrl: './create-brand-form.component.html',
  styleUrl: './create-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBrandFormComponent implements OnInit {
  hasFormSubmit: boolean = false;

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private fb: FormBuilder,
    private brandsApiService: BrandsApiService,
    private dataManageService: DataManageService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.dataManageService.setHasChanged(true);
    });
  }

  createBrand() {
    const request: PostBrandRequest = {
      name: this.form.value.name,
    };
    this.brandsApiService.postBrand(request).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Brand created succesfully');
        this.form.reset();
        this.toastr.success('Brand created successfully');
      },
    });
  }

  onFormSubmit() {
    console.log(this.form);
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.error('form is invalid');
      return;
    }
    this.createBrand();
    this.router.navigate(['/home/brands']);
  }
}
