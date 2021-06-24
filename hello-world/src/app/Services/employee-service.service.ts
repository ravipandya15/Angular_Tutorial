import { Injectable } from '@angular/core';

// @Injectable is used to say if this service has any dependency then inject it.
@Injectable({
  providedIn: 'root' // need to check providedIn : root, any, plateform
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name" : "Ravi Pandya", "age": 22},
      {"id": 2, "name" : "Andrew", "age": 32},
      {"id": 3, "name" : "Brandon", "age": 40}
    ];
  }
}
