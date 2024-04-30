import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModelPageComponent } from './update-model-page.component';

describe('UpdateModelPageComponent', () => {
  let component: UpdateModelPageComponent;
  let fixture: ComponentFixture<UpdateModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateModelPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
