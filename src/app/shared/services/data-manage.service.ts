import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataManageService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  hasChanged$: Observable<boolean> = this.dataSubject.asObservable();

  setData(data: any) {
    this.dataSubject.next(data);
  }

  setHasChanged(hasChanged: boolean) {
    this.dataSubject.next(hasChanged);
  }
}
