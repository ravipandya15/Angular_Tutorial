import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = "http://localhost:3000/enroll";
  constructor(private http : HttpClient) { }

  register(userData : any){
    return this.http.post<any>(this._url, userData);
  }
}
