import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuftragserfassungService } from '../core/auftragserfassung.service';
import { AssignmentDto } from '../models/assignmentDto';
import { MunicipalDto } from '../models/municipalDto';

const ASSIGNMENT_DATA: AssignmentDto[] = [
  {assignmentNumber: 1, municipal: {id: 1, name: "Hartkirchen"}, costCenter: 1, 
  email: "ss", assignmentLink: "aa", assignment: "aa", staffSuggestion: "Herbert", 
  start: null, duration: 2, end: null, progress: "a", status: "s"}
]

@Component({
  selector: 'app-auftragserfassung',
  templateUrl: './auftragserfassung.component.html', 
  styleUrls: ['./auftragserfassung.component.css']
})
export class AuftragserfassungComponent implements OnInit {
  displayedColumns: string[] = ['assignmentNumber', 'municipal', 'btnDelete']
  dataSource = ASSIGNMENT_DATA;

  assignmentFormGroup = new FormGroup({
    assignmentNumber: new FormControl(''),
    municipal: new FormControl(''),
    costCenter: new FormControl(''),
    email: new FormControl(''),
    assignmentLink: new FormControl(''),
    assignment: new FormControl(''),
    staffSuggestion: new FormControl(''),
    start: new FormControl(''),
    duration: new FormControl(''),
    end: new FormControl(''),
    progress: new FormControl(''),
    status: new FormControl('')
  });

  municipals: MunicipalDto[];

  constructor(private auftragsservice: AuftragserfassungService) { }

  ngOnInit(): void {
    this.assignmentFormGroup.valueChanges.subscribe(x => {
      console.log(x);
    });

    this.auftragsservice.getMunicipals().subscribe(x => {
      console.log(x);
      this.municipals = x;
    })

  }

  saveAssignment(): void{
    console.log("save assignment");
    console.log(this.assignmentFormGroup.get("assignmentTitle").value);
  }
}
