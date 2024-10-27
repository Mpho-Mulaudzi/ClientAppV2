import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { maxDateValidator } from '../../../core/helper-functions/dateValidators';
import { StateManagementService } from '../../../core/services/state-management.service';
import { Requisition } from '../../../core/models/requisition';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

interface PatientDemographics {
  timeSampleTaken: Date;
  firstName: string;
  surname: string;
  gender: string;
  dateOfBirth: Date;
  age: number;
  mobileNumber: string;
}

@Component({
  selector: 'app-capture-demographics',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
  ],
  templateUrl: './capture-demographics.component.html',
  styleUrls: ['./capture-demographics.component.css']
})
export class CaptureDemographicsComponent {

  constructor(private stateManagement: StateManagementService){}
  patientForm = new FormGroup({
    timeSampleTaken: new FormControl(new Date(), Validators.required),
    firstName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    gender: new FormControl('', [Validators.required, Validators.pattern('[MFU]')]),
    dateOfBirth: new FormControl(null, [Validators.required, maxDateValidator()]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\+27)\d{9}$/)])
   
  });

  // Function to calculate age based on dateOfBirth and timeSampleTaken
  calculateAge() {
    const birthDate = this.patientForm.get('dateOfBirth')?.value ?? new Date();
    const sampleTime = this.patientForm.get('timeSampleTaken')?.value ?? new Date();

    if (birthDate && sampleTime) {
      const ageDiffMs = Math.abs(sampleTime.getTime() - birthDate.getTime());
      // const ageDate = new Date(ageDiffMs);
      // const ageYear = ageDate.getUTCFullYear() - 1970;
      // this.patientForm.get('age')?.setValue(ageYear);
    }
  }
  submitDemographics() {
    const patientDemographics: any= this.patientForm.value;
    if (patientDemographics.FirstName) {
      const resultData: Requisition ={
        RequisitionId: patientDemographics.RequisitionId,
        TimeSampleTaken: patientDemographics.timeSampleTaken ,
        FirstName: patientDemographics.firstName,
        Surname: patientDemographics.Surname,
        Gender: patientDemographics.Gender,
        DateOfBirth: patientDemographics.DateOfBirth,
        Age: 0,
        MobileNumber: patientDemographics.MobileNumber
      }

    }
  
    const resultData = this.patientForm.value;
    this.stateManagement.updatePatientDemographics([resultData]);
  }
} 