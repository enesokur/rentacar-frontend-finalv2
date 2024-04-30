import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModelFormComponent } from './create-model-form.component';

describe('CreateModelFormComponent', () => {
  let component: CreateModelFormComponent;
  let fixture: ComponentFixture<CreateModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateModelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
