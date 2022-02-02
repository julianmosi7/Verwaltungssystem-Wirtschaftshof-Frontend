import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MunicipalDto } from '../models/municipalDto';
// @ts-ignore
import { costcenterDto } from '../models/costcenterDto';
// @ts-ignore
import { StatusDto } from '../models/statusDto';
import { AssignmentDto } from '../models/assignmentDto';

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

  getAssignments(): Observable<AssignmentDto[]>{
    return this.http.get<AssignmentDto[]>(`${this.url}/assignment/getAll`);
  }

  getAllAssignmentsNotApproved(): Observable<AssignmentDto[]>{
    return this.http.get<AssignmentDto[]>(`${this.http}/assignment/getAllNotApproved`);
  }

  deleteAssignment(assignmentId: number): Observable<AssignmentDto>{
    return this.http.delete<AssignmentDto>(`${this.url}/assignment/deleteAssignment/${assignmentId}`);
  }

  saveAssignment(assignment: AssignmentDto): Observable<AssignmentDto>{
    console.log(`assignment: ${assignment}`);
    return this.http.post<AssignmentDto>(`${this.url}/assignment/newAssignment`, assignment);
  }

  updateAssignment(assignment: AssignmentDto): Observable<AssignmentDto>{
    return this.http.put<AssignmentDto>(`${this.url}/assignment/editAssignment`, assignment);
  }

}
