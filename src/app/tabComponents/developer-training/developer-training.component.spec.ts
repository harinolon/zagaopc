import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTrainingComponent } from './developer-training.component';

describe('DeveloperTrainingComponent', () => {
  let component: DeveloperTrainingComponent;
  let fixture: ComponentFixture<DeveloperTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
