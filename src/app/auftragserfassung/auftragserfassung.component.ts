import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuftragserfassungService } from '../core/auftragserfassung.service';
import { AssignmentDto } from '../models/assignmentDto';
import { CostCenter } from '../models/costCenter';
import { MunicipalDto } from '../models/municipalDto';
import { RoleDto } from '../models/roleDto';
import { UserDto } from '../models/userDto';

const ASSIGNMENT_DATA: AssignmentDto[] = [
  {assignmentId: 1, municipal: {id: 1, name: "Hartkirchen"}, costCenter: {id: 0, description: "X1", category: "32"}, 
  email: "ss", assignmentLink: "aa", assignmentDescription: "aa", staffSuggestion: "Herbert", 
  start: null, duration: 2, end: null, progress: "a", status: "s", approved: true}
]

@Component({
  selector: 'app-auftragserfassung',
  templateUrl: './auftragserfassung.component.html', 
  styleUrls: ['./auftragserfassung.component.css']
})
export class AuftragserfassungComponent implements OnInit {
  validityButton: Boolean = true;

  displayedColumns: string[] = ['assignmentId', 'municipal', 'costCenter', 'email',
  'assignmentLink', 'assignmentDescription', 'staffSuggestion', 'start', 'duration', 'end', 'progress',
  'status', 'btnAccept', 'btnDelete']
  dataSource = ASSIGNMENT_DATA;

  assignmentFormGroup = new FormGroup({
    municipal: new FormControl('', Validators.required),
    costCenter: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    path: new FormControl(''),
    assignmentLink: new FormControl(''),
    assignmentDescription: new FormControl('', Validators.required),
    staffSuggestion: new FormControl(''),
    start: new FormControl(''),
    duration: new FormControl(''),
    end: new FormControl(''),
    progress: new FormControl(0, [Validators.min(0), Validators.max(100)]),
    status: new FormControl(''),
    approved: new FormControl('')
  });

  municipals: MunicipalDto[] = [];

  /*
    ? is costCenterNumber the category of the cost center ???
  */

  costCenters: CostCenter[] = [
    {id: 0, description: 'Cost Center 1', category: "1"},
    {id: 1, description: 'Cost Center 2', category: "2"}
  ];

  status: String[] = [
    "Open", "Closed"
  ]

  assignment: AssignmentDto;

  staff: UserDto[] = [
    {userId: 0, firstname: "Selina", lastname: "Moshammer", email: "moshammersel",
  password: "1234", birthdate: null, role: null, licence: null, holidays: null, assignments: null}
  ]

  constructor(private auftragsservice: AuftragserfassungService) { }

  //#region Getter

  get municipal() {
    return this.assignmentFormGroup.get("municipal");
  }

  get costCenter(){
    return this.assignmentFormGroup.get("costCenter");
  }

  get email(){
    return this.assignmentFormGroup.get("email");
  }
  get assignmentDescription(){
    return this.assignmentFormGroup.get("assignmentDescription");
  }

  //#endregion

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
    this.validityButton = false;

    console.log("save assignment...");
    this.assignment = {
      assignmentId: null,
      costCenter: this.assignmentFormGroup.get("costCenter").value,
      municipal: this.assignmentFormGroup.get("municipal").value,
      email: this.assignmentFormGroup.get("email").value,
      assignmentLink: this.assignmentFormGroup.get("assignmentLink").value,
      assignmentDescription: this.assignmentFormGroup.get("assignmentDescription").value,
      // staffSuggestion: this.assignmentFormGroup.get("staffSuggestion").value,
      staffSuggestion: null,
      start: this.assignmentFormGroup.get("start").value,
      duration: this.assignmentFormGroup.get("duration").value,
      end: this.assignmentFormGroup.get("end").value,
      progress: this.assignmentFormGroup.get("progress").value,
      status: this.assignmentFormGroup.get("status").value,
      approved: false
    };

    this.auftragsservice.saveAssignment(this.assignment).subscribe(x => {
      console.log(x);
      //TODO: create new row to table, after assignment was sent
    });
  }

  updateAssignment(assignment: AssignmentDto, approved: boolean): void{
    console.log("update assignment...");
    assignment.approved = approved;
    this.auftragsservice.updateAssignment(this.assignment).subscribe(x => {
      console.log(x);
      //TODO: delete from row, if accepted or deleted
    })
  }
}
