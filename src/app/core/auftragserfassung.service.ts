import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MunicipalDto } from '../models/municipalDto';
// @ts-ignore
import { CostCenterDto } from '../models/costCenterDto';
import { AssignmentDto } from '../models/assignmentDto';

@Injectable({
  providedIn: 'root'
})
export class AuftragserfassungService {
  url = 'http://localhost:8081/rest';

  constructor(private http: HttpClient) { }

  getMunicipals(): Observable<MunicipalDto[]>{
    return this.http.get<MunicipalDto[]>(`${this.url}/gemeinde/getAll`);
  }

  getCostcenters(): Observable<CostCenterDto[]>{
    return this.http.get<CostCenterDto[]>(`${this.url}/Costcenter/getAll`);
  }

  saveAssignment(assignment: AssignmentDto): Observable<AssignmentDto>{
    return this.http.post<AssignmentDto>(`${this.url}/auftrag/newAuftrag`, assignment);
  }

  updateAssignment(assignment: AssignmentDto): Observable<AssignmentDto>{
    return this.http.put<AssignmentDto>(`${this.url}/auftrag/editEntry`, assignment);
  }

}
