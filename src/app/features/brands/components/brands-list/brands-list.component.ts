import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { BrandsListItemDto } from '../../models/brands-list-item-dto';
import { BrandsApiService } from '../../services/brands-api.service';
import { Router, RouterLink } from '@angular/router';
import { DataManageService } from '../../../../shared/services/data-manage.service';
import { MultipleDirective } from '../../../../core/directives/multiple.directive';
import { WelcomeDirective } from '../../../../core/directives/welcome.directive';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MultipleDirective, WelcomeDirective],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit {
  @Output() selectBrand = new EventEmitter<number | null>();

  list: Array<BrandsListItemDto> = [];

  constructor(
    private brandsApiService: BrandsApiService,
    private dataManageService: DataManageService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }

  onBrandClick(id: number | null) {
    this.selectBrand.emit(id);
  }

  navigateToUpdate(brandId: number) {
    const brand = this.list.find((item) => {
      return item.id == brandId;
    });
    this.dataManageService.setData(brand);
    this.router.navigate(['/home/brands/' + brandId]);
  }
}
