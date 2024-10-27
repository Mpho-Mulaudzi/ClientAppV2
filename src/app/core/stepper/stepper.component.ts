import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient} from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChooseTestsComponent } from "../../shared/components/choose-tests/choose-tests.component";
import { CaptureDemographicsComponent } from "../../shared/components/capture-demographics/capture-demographics.component";
import { CaptureResultsComponent } from "../../shared/components/capture-results/capture-results.component";
import { GenerateReportComponent } from '../../shared/components/generate-report/generate-report.component';
import { Test } from '../models/test';
@Component({
  selector: 'app-stepper',
  standalone: true, // Mark the component as standalone
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    ChooseTestsComponent,
    CaptureDemographicsComponent,
    CaptureResultsComponent,
    GenerateReportComponent
],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent  implements OnInit{
  selectedTest: Test | any ;
  testResults: any[] = [];
  patientDemographics: any[] =[];
  isLinear = false;
  ngOnInit(): void {
  //  this.preloadImage();
  }
  constructor() { }

  //Always load the logo
  // preloadImage() {
  //   this.http.get('../../../assets/images/logo.jpg', { responseType: 'blob' }).subscribe(() => {
  //     console.log('Image preloaded successfully');
  //   });
  // }
}