import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MunicipalDto } from '../models/municipalDto';
import { AssignmentDto } from '../models/assignmentDto';

@Injectable({
  providedIn: 'root'
})
export class AuftragserfassungService {
  url = 'localhost:8081/rest'

  constructor(private http: HttpClient) { }

  getMunicipals(): Observable<MunicipalDto[]>{
    return this.http.get<MunicipalDto[]>(`${this.url}/gemeinde/getAll`);
  }

  saveAssignment(assignment: AssignmentDto): Observable<AssignmentDto>{
    return this.http.post<AssignmentDto>(`${this.url}/saveAssignment`, assignment);
  }

}
 