import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModelPageComponent } from './create-model-page.component';

describe('CreateModelPageComponent', () => {
  let component: CreateModelPageComponent;
  let fixture: ComponentFixture<CreateModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateModelPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
