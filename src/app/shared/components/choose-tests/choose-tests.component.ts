import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TestService } from '../../../core/services/test.service';
import {Test} from '../../../core/models/test'
import { StateManagementService } from '../../../core/services/state-management.service';
interface TestOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-choose-tests',
  standalone: true,
  imports: [CommonModule, MatSelectModule,ReactiveFormsModule, FormsModule,MatButtonModule],
  templateUrl: './choose-tests.component.html',
  styleUrls: ['./choose-tests.component.css']
})
export class ChooseTestsComponent implements OnInit {
  testControl = new FormGroup({
     Name : new FormControl('', Validators.required),
  })
  
  tests: any
  constructor(private testService : TestService, private stateManagement: StateManagementService){}
  ngOnInit() {
    this.testService.getAvailableTests().subscribe((data) => {
      this.tests = data;
       console.log(this.tests)
    });
  }

  selectTest(test: Test) {
    this.stateManagement.updateSelectedTest(test);
  }
}