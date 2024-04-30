import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorMessages',
  standalone: true,
})
export class ErrorMessagesPipe implements PipeTransform {
  transform(errors: ValidationErrors | null | undefined): string {
    if (!errors) {
      return '';
    } else {
      if (errors['required']) {
        return 'This field is required';
      } else if (errors['minlength']) {
        return `This field must has minimum ${errors['minlength'].requiredLength} characters`;
      } else if (errors['min']) {
        return `This field can not be lesser than ${errors['min'].min}`;
      } else if (errors['max']) {
        return `This field can not be bigger than ${errors['max'].max}`;
      } else {
        return '';
      }
    }
  }
}
