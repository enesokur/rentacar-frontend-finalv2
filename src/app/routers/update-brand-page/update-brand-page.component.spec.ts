import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandPageComponent } from './update-brand-page.component';

describe('UpdateBrandPageComponent', () => {
  let component: UpdateBrandPageComponent;
  let fixture: ComponentFixture<UpdateBrandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBrandPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBrandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
