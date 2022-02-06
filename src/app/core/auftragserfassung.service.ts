import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MunicipalDto } from '../models/municipalDto';
// @ts-ignore
import { costcenterDto } from '../models/costcenterDto';
// @ts-ignore
import { StatusDto } from '../models/statusDto';
import { AssignmentDto } from '../models/assignmentDto';
import {UserDto} from '../models/userDto';
import { SendAssignmentDto } from '../models/sendAssignmentDto';


@Injectable({
  providedIn: 'root'
})
export class AuftragserfassungService {
  url = 'http://localhost:8081/rest';

  constructor(private http: HttpClient) { }

  getMunicipals(): Observable<MunicipalDto[]>{
    return this.http.get<MunicipalDto[]>(`${this.url}/municipal/getAll`);
  }

  getCostcenters(): Observable<costcenterDto[]>{
    return this.http.get<costcenterDto[]>(`${this.url}/costcenter/getAll`);
  }

  getStatus(): Observable<StatusDto[]>{
    return this.http.get<StatusDto[]>(`${this.url}/status/getAll`);
  }

  getUserss(): Observable<UserDto[]>{
    return this.http.get<UserDto[]>(`${this.url}/user/getAll`);
  }

  getAssignments(): Observable<AssignmentDto[]>{
    return this.http.get<AssignmentDto[]>(`${this.url}/assignment/getAll`);
  }

  getAllAssignmentsNotApproved(): Observable<AssignmentDto[]>{
    return this.http.get<AssignmentDto[]>(`${this.url}/assignment/getAllNotApproved`);
  }

  deleteAssignment(assignmentId: number): Observable<AssignmentDto>{
    return this.http.delete<AssignmentDto>(`${this.url}/assignment/deleteAssignment/${assignmentId}`);
  }

  saveAssignment(assignment: SendAssignmentDto): Observable<AssignmentDto>{
    console.log(`assignment: ${assignment}`);
    return this.http.post<AssignmentDto>(`${this.url}/assignment/newAssignment`, assignment);
  }

  updateAssignment(assignmentId: number, assignment: SendAssignmentDto): Observable<AssignmentDto>{
    return this.http.put<AssignmentDto>(`${this.url}/assignment/updateAssignment/${assignmentId}`, assignment);
  }

  setApproved(assignmentId: number): Observable<AssignmentDto>{
    return this.http.get<AssignmentDto>(`${this.url}/assignment/approveAssignment/${assignmentId}`);
  }

  getUserByUsername(username: String): Observable<UserDto>{
    return this.http.get<UserDto>(`${this.url}/user/getUserByUsername/${username}`);
  }

}
