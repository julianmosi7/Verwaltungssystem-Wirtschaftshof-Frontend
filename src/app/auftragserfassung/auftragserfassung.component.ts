import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuftragserfassungService } from '../core/auftragserfassung.service';
import { AssignmentDto } from '../models/assignmentDto';
import { CostcenterDto } from '../models/costcenterDto';
import { MunicipalDto } from '../models/municipalDto';
import { RoleDto } from '../models/roleDto';
import { Status } from '../models/statusDto';
import { UserDto } from '../models/userDto';

const ASSIGNMENT_DATA: AssignmentDto[] = [

];

@Component({
  selector: 'app-auftragserfassung',
  templateUrl: './auftragserfassung.component.html',
  styleUrls: ['./auftragserfassung.component.css']
})
export class AuftragserfassungComponent implements OnInit {
  validityButton: Boolean = true;

  displayedColumns: string[] = ['assignmentId', 'municipal', 'costcenter', 'email',
  'assignmentLink', 'assignmentDescription', 'personal', 'start', 'duration', 'end', 'progress',
  'status', 'btnAccept', 'btnDelete'];
  // dataSource = ASSIGNMENT_DATA;

  assignments: AssignmentDto[] = [];

  dataSource = this.assignments;

  assignmentFormGroup = new FormGroup({
    municipal: new FormControl('', Validators.required),
    costcenter: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    path: new FormControl(''),
    assignmentLink: new FormControl(''),
    assignmentDescription: new FormControl('', Validators.required),
    personal: new FormControl(''),
    start: new FormControl(''),
    duration: new FormControl(''),
    end: new FormControl(''),
    progress: new FormControl(0, [Validators.min(0), Validators.max(100)]),
    status: new FormControl(''),
    approved: new FormControl('')
  });


  municipals: MunicipalDto[] = [];

  costcenters: CostcenterDto[] = [
  ];

  status: Status[] = [
  ];

  assignment: AssignmentDto;

  staff: UserDto[] = [
    {userId: 0, username: 'selimosi', password: 'test', firstname: 'Selina', lastname: 'Moshammer', email: 'moshammersel',
     birthdate: null, role: null, licence: null, holidays: null, assignments: null},

     {userId: 1, username: 'tamx', password: 'test', firstname: 'Tamara', lastname: 'Enser', email: 'tams',
     birthdate: null, role: null, licence: null, holidays: null, assignments: null}
  ];

  constructor(private auftragsservice: AuftragserfassungService) { }

  //#region Getter

  get municipal() {
    return this.assignmentFormGroup.get('municipal');
  }

  get costcenter(){
    return this.assignmentFormGroup.get('costcenter');
  }

  get email(){
    return this.assignmentFormGroup.get('email');
  }
  get assignmentDescription(){
    return this.assignmentFormGroup.get('assignmentDescription');
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

    this.auftragsservice.getCostcenters().subscribe(x => {
      console.log(x);
      this.costcenters = x;
    });

    this.auftragsservice.getStatus().subscribe(x => {
      console.log(x);
      this.status = x;
    });

    this.loadAssignments();

  }

  loadAssignments(){
    this.auftragsservice.getAllAssignmentsNotApproved().subscribe(x => {
      console.log(x);
      this.assignments = x;
      this.dataSource = this.assignments;
    });
  }

  saveAssignment(): void{
    if (!this.email.valid && (this.email?.dirty || this.email?.touched)){
      this.validityButton = false;
    }

    console.log('save assignment...');
    this.assignment = {
      assignment_id: null,
      costcenter: this.assignmentFormGroup.get('costcenter').value,
      municipal: this.assignmentFormGroup.get('municipal').value,
      email: this.assignmentFormGroup.get('email').value,
      link: this.assignmentFormGroup.get('assignmentLink').value,
      assignmentDescription: this.assignmentFormGroup.get('assignmentDescription').value,
      personal: null,
      start: null,
      duration: this.assignmentFormGroup.get('duration').value,
      end: null,
      progress: this.assignmentFormGroup.get('progress').value,
      status: this.assignmentFormGroup.get('status').value,
      approved: false
    };

    console.log(this.assignment);

    this.auftragsservice.saveAssignment(this.assignment).subscribe(x => {
      console.log(x);
      this.loadAssignments();
    });
  }

  updateAssignment(assignment: AssignmentDto): void{
    console.log(assignment);
    this.auftragsservice.setApproved(assignment.assignment_id).subscribe(x => {
      console.log(x);
      this.loadAssignments();
    });
  }

  deleteAssignment(assignment: AssignmentDto){
    this.auftragsservice.deleteAssignment(assignment.assignment_id).subscribe(x => {
      console.log(x);
      this.loadAssignments();
    });
  }
}
