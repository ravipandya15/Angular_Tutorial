import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { IEmployee } from './employees';
import { catchError } from 'rxjs/operators';

// @Injectable is used to say if this service has any dependency then inject it.
@Injectable({
  providedIn: 'root' // need to check providedIn : root, any, plateform
})
export class EmployeeServiceService {
  public _url = "../Services/Data/employees.json";
  constructor(private http : HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
                catchError(this.errorHandler));
    // return [
    //   {"id": 1, "name" : "Ravi Pandya", "age": 22},
    //   {"id": 2, "name" : "Andrew", "age": 32},
    //   {"id": 3, "name" : "Brandon", "age": 40}
    // ];
  }

  errorHandler(error : HttpErrorResponse){
    return observableThrowError( error.message || "Server Error");
  }
}
