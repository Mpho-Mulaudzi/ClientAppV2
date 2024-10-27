import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureResultsComponent } from './capture-results.component';

describe('CaptureResultsComponent', () => {
  let component: CaptureResultsComponent;
  let fixture: ComponentFixture<CaptureResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptureResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
