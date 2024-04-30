import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { DataManageService } from '../services/data-manage.service';

export const formGuard: CanDeactivateFn<unknown> = () => {
  const dataManageService = inject(DataManageService);
  let result;
  dataManageService.hasChanged$.subscribe((response) => {
    result = response;
  });
  console.log(result);

  if (result) {
    if (confirm('Do you want to leave from this page?')) {
      dataManageService.setHasChanged(false);
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
