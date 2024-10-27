// test.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { testData } from '../data/test-data'

@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor() { }

  getAvailableTests():  Observable<any[]> {
    return of(testData);
}
}