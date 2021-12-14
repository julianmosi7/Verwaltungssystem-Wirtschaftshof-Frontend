import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuftragserfassungService } from '../core/auftragserfassung.service';
import { AssignmentDto } from '../models/assignmentDto';
import { CostCenter } from '../models/costCenter';
import { MunicipalDto } from '../models/municipalDto';
import { RoleDto } from '../models/roleDto';
import { UserDto } from '../models/userDto';

const ASSIGNMENT_DATA: AssignmentDto[] = [
  {assignmentId: 1, municipal: {id: 1, name: "Hartkirchen"}, costCenter: {costCenterNumber: "X1", costCenterName: "Kostenstelle"}, 
  email: "ss", assignmentLink: "aa", assignment: "aa", staffSuggestion: "Herbert", 
  start: null, duration: 2, end: null, progress: "a", status: "s"}
]

@Component({
  selector: 'app-auftragserfassung',
  templateUrl: './auftragserfassung.component.html', 
  styleUrls: ['./auftragserfassung.component.css']
})
export class AuftragserfassungComponent implements OnInit {
  displayedColumns: string[] = ['assignmentId', 'municipal', 'costCenter', 'email',
  'assignmentLink', 'assignment', 'staffSuggestion', 'start', 'duration', 'end', 'progress',
  'status', 'btnAccept', 'btnDelete']
  dataSource = ASSIGNMENT_DATA;

  assignmentFormGroup = new FormGroup({
    assignmentId: new FormControl(''),
    municipal: new FormControl(''),
    costCenter: new FormControl(''),
    email: new FormControl(''),
    path: new FormControl(''),
    assignmentLink: new FormControl(''),
    assignment: new FormControl(''),
    staffSuggestion: new FormControl(''),
    start: new FormControl(''),
    duration: new FormControl(''),
    end: new FormControl(''),
    progress: new FormControl(''),
    status: new FormControl(''),
  });

  municipals: MunicipalDto[] = [];

  costCenters: CostCenter[] = [
    {costCenterName: "Name 1", costCenterNumber: "1"},
    {costCenterName: "Name 2", costCenterNumber: "2"}
  ];

  assignment: AssignmentDto;

  staff: UserDto[] = [
    {userId: 0, firstname: "Selina", lastname: "Moshammer", email: "moshammersel",
  password: "1234", birthdate: null, role: null, licence: null, holidays: null, assignments: null}
  ]

  constructor(private auftragsservice: AuftragserfassungService) { }

  ngOnInit(): void {
    this.assignmentFormGroup.valueChanges.subscribe(x => {
      console.log(x);
    });

    this.auftragsservice.getMunicipals().subscribe(x => {
      console.log(x);
      this.municipals = x;
    });
  }

  saveAssignment(): void{
    console.log("save assignment");
    this.assignment = {
      assignmentId: this.assignmentFormGroup.get("assignmentId").value,
      costCenter: this.assignmentFormGroup.get("costCenter").value,
      municipal: this.assignmentFormGroup.get("municipal").value,
      email: this.assignmentFormGroup.get("email").value,
      assignmentLink: this.assignmentFormGroup.get("assignmentLink").value,
      assignment: this.assignmentFormGroup.get("assignment").value,
      // staffSuggestion: this.assignmentFormGroup.get("staffSuggestion").value,
      staffSuggestion: null,
      start: this.assignmentFormGroup.get("start").value,
      duration: this.assignmentFormGroup.get("duration").value,
      end: this.assignmentFormGroup.get("end").value,
      progress: this.assignmentFormGroup.get("progress").value,
      status: this.assignmentFormGroup.get("status").value
    };

    this.auftragsservice.saveAssignment(this.assignment).subscribe(x => {
      console.log(x);
    });
  }
}
