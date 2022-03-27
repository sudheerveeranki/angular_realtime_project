import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  HttpOptions= {
    Headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  getEmployee(){
    return this.http.get(this.apiURL+'/employees')
    .pipe(retry(2),catchError(this.handleError));
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
