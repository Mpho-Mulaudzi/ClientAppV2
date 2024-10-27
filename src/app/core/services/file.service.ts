import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import for snackbar notification

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private _snackBar: MatSnackBar) { }

  generateJSONReport(data: any, fileName: string) {
    const jsonData = JSON.stringify(data, null, 2); // Formatted JSON
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName + '.json';
    link.click();

    window.URL.revokeObjectURL(url);   


    this._snackBar.open('JSON Report Generated Successfully', 'Close', {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }
}