import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedhatCertsComponent } from './redhat-certs.component';

describe('RedhatCertsComponent', () => {
  let component: RedhatCertsComponent;
  let fixture: ComponentFixture<RedhatCertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedhatCertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedhatCertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
