import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandFormComponent } from './update-brand-form.component';

describe('UpdateBrandFormComponent', () => {
  let component: UpdateBrandFormComponent;
  let fixture: ComponentFixture<UpdateBrandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBrandFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBrandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
