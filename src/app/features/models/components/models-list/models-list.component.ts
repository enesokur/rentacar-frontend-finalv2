import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ModelsApiService } from '../../services/models-api.service';
import { ModelsListItemDto } from '../../models/models-list-item-dto';
import { Router, RouterLink } from '@angular/router';
import { DataManageService } from '../../../../shared/services/data-manage.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginationComponent],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit, OnChanges {
  @Input() brandId: number | null = null;
  @Input() searchBrandName: string | null = null;

  list!: ModelsListItemDto[];
  constructor(
    private modelsApiService: ModelsApiService,
    private dataManageService: DataManageService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['brandId'] &&
      changes['brandId'].currentValue !== changes['brandId'].previousValue
    ) {
      this.getList();
    }
    if (
      changes['searchBrandName'] &&
      changes['searchBrandName'].currentValue !==
        changes['searchBrandName'].previousValue
    ) {
      this.getList();
    }
  }

  private getList() {
    this.modelsApiService
      .getList(this.brandId, this.searchBrandName)
      .subscribe((response) => {
        this.list = response;
        this.change.markForCheck();
      });
  }

  navigateToUpdate(modelId: number) {
    const model = this.list.find((item) => {
      return item.id == modelId;
    });
    this.dataManageService.setData(model);
    this.router.navigate(['/home/models/' + modelId]);
  }
}
