import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(private httpClient : HttpClient) { }
  baseUrl = "http://localhost:8080/tasks";
  insertTask(task : Task,username : string):Observable<Object>
    {
      
      return this.httpClient.post(`${this.baseUrl}/insert/${username}`, task);
    }
    // getTaskList():Observable<Task[]>{
    //   return this.httpClient.get<Task[]>(this.baseUrl+"/retreive");
    // }
    deleteTask(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/deleteData/${id}`);
    }
    
    updateTask(id:number,task : Task):Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/updateData/${id}`,task);
    }
    getTaskList(username :string):Observable<Task[]>{
      return this.httpClient.get<Task[]>(`${this.baseUrl}/view/${username}`);
    }

}
