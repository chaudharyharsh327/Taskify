import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient : HttpClient) { }
  baseUrl = "http://localhost:8080/tasks";
  validateUser(user : User):Observable<Object>{
        return this.httpClient.post(`${this.baseUrl}/login`,user);
  }
  createUser(user : User):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/create`,user);
  }
}
