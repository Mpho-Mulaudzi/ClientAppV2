
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {
 
  private testResultsSource = new BehaviorSubject<any[]>([]);
  private patientDemographicsSource = new BehaviorSubject<any[]>([]);
  private selectedTestSource= new BehaviorSubject<Test | null>(null);

  selectedTest$ = this.selectedTestSource.asObservable();
  testResults$ = this.testResultsSource.asObservable();
  patientDemographics$ = this.patientDemographicsSource.asObservable();

  updatePatientDemographics(demographics: any[]) {
    this.patientDemographicsSource.next(demographics);
  }
  updateTestResults(results: any[]) {
    this.testResultsSource.next(results);
  }
  updateSelectedTest(test: Test) {
    this.selectedTestSource.next(test);
  }
}