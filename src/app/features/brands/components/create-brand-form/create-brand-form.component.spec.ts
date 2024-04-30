import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBrandFormComponent } from './create-brand-form.component';

describe('CreateBrandFormComponent', () => {
  let component: CreateBrandFormComponent;
  let fixture: ComponentFixture<CreateBrandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBrandFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBrandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
