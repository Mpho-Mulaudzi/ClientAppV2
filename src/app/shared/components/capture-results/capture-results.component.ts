import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StateManagementService } from '../../../core/services/state-management.service';
import { MatStepperModule } from '@angular/material/stepper';

export interface Result {
  TestId: number;
  Result: string;
  Comment: string;
}

@Component({
  selector: 'app-capture-results',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
  ],
  templateUrl: './capture-results.component.html',
  styleUrls: ['./capture-results.component.css']
})
export class CaptureResultsComponent {

  resultForm = new FormGroup({
    testId: new FormControl(''),
    result: new FormControl(''),
    comment: new FormControl('')
  });
  constructor(private stateManagementService: StateManagementService) {}

  //  method to handle result submission
  submitResult() {
    const formValue = this.resultForm.value;
  
    if (formValue.testId && formValue.result && formValue.comment) {
      const resultData: Result = {
        TestId: +formValue.testId,
        Result: formValue.result,
        Comment: formValue.comment
      };
      console.log(resultData);
    } else {
      // Handle the case where required fields are missing
      console.error('Missing required fields');
    }
    const resultData = this.resultForm.value;
    this.stateManagementService.updateTestResults([resultData]);
  }
}