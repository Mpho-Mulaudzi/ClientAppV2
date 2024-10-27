// requisition.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {
  requisitions: any[] = [];

  constructor() { }

  addRequisition(requisition: any) {
    this.requisitions.push(requisition);
  }

  getRequisitions(): any[] {
    return this.requisitions;
  }
}