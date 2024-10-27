import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { StateManagementService } from '../../../core/services/state-management.service';
import { FileService } from '../../../core/services/file.service';
import { Test } from '../../../core/models/test';
interface TestResult {
  TestId: any;
  Result: any;
  Comment: any;
}

@Component({
  selector: 'app-generate-report',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent  implements OnInit{
  @Input() selectedTest: Test | null = null;
  @Input() testResults: TestResult[] = [];
  @Input() patientDemographics: any[] =[];

  constructor(private _snackBar: MatSnackBar,
     private stateManagement: StateManagementService,
     private fileService: FileService) {}
  ngOnInit(): void {
    this.stateManagement.selectedTest$.subscribe(names =>{
      this.selectedTest = names;
    })
    this.stateManagement.testResults$.subscribe(results => {
      this.testResults = results;
    });
    this.stateManagement.patientDemographics$.subscribe(demographics => {
      this.patientDemographics = demographics;
    });
  }

  // generateJSONReport() {
  //   const fullReport = {
  //     patientDemographics: this.patientDemographics,
  //     testResults: this.testResults
  //   };

  //   const jsonReport = JSON.stringify(fullReport, null, 2); // Formatted JSON
  //   const blob = new Blob([jsonReport], { type: 'application/json' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'report.json';   

  //   a.click();
  //   window.URL.revokeObjectURL(url);

  //   this._snackBar.open('JSON Report Generated Successfully', 'Close', {
  //     duration: 2000,
  //     panelClass: ['success-snackbar']
  //   });
  // }
  generateJSONReport() {
    const fullReport = {
      testName:this.selectedTest,
      patientDemographics: this.patientDemographics,
      testResults: this.testResults
    };

    this.fileService.generateJSONReport(fullReport, 'report');
  }

  generateTextReport() {
    // Ensure testResults are populated before generating the report
    if (!this.testResults.length) {
      this._snackBar.open('No Test Results Available', 'Close', {
        duration: 2000
      });
      return;
    }
  
    const textReport = this.testResults.map(result => {
      return `Test ID: ${result.TestId}\nResult: ${result.Result}\nComment: ${result.Comment}\n\n`; // Add newlines for each test result
    }).join(''); // Concatenate all formatted strings
  
    const blob = new Blob([textReport], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  
    this._snackBar.open('Text Report Generated Successfully', 'Close', {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }
}