import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient:HttpClient) { }

  private baseUrl ='http://localhost:8080/api/v1/employees';

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  createEmployee(employee:Employee):Observable<any>{
    return this.httpClient.post(this.baseUrl,employee);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseUrl+"/"+id);
  }
  updateEmployee(id:number,employee:Employee){
    return this.httpClient.put(this.baseUrl+"/"+id,employee);
  }
  deleteEmployee(id:number):Observable<Employee>{
    return this.httpClient.delete<Employee>(this.baseUrl+"/"+id);
  }

}
