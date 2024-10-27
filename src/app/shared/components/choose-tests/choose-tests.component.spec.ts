import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTestsComponent } from './choose-tests.component';

describe('ChooseTestsComponent', () => {
  let component: ChooseTestsComponent;
  let fixture: ComponentFixture<ChooseTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
