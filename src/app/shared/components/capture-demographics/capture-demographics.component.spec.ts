import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureDemographicsComponent } from './capture-demographics.component';

describe('CaptureDemographicsComponent', () => {
  let component: CaptureDemographicsComponent;
  let fixture: ComponentFixture<CaptureDemographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptureDemographicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
