import {Component, OnInit, ViewChild} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {UserDto} from '../models/userDto';
import {AssignmentDto} from '../models/assignmentDto';
import {MunicipalDto} from '../models/municipalDto';
import {CostcenterDto} from '../models/costcenterDto';
import {StatusDto} from '../models/statusDto';
import {SendAssignmentDto} from '../models/sendAssignmentDto';
import {AuftragserfassungService} from '../core/auftragserfassung.service';
import {AuftragserfassungDialogComponent} from '../components/auftragserfassung-dialog/auftragserfassung-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  static user: UserDto;


  displayedColumns: string[] = ['assignment_id', 'municipal', 'costcenter', 'email',
    'assignmentLink', 'assignmentDescription', 'personal', 'start', 'duration', 'end', 'progress',
    'status', 'btnDelete', 'btnEdit'];

  assignments: AssignmentDto[] = [];

  dataSource = this.assignments;

  municipals: MunicipalDto[] = [];

  costcenters: CostcenterDto[] = [];

  status: StatusDto[] = [];

  assignment: SendAssignmentDto;

  staff: UserDto[] = [];

  constructor(private auftragsservice: AuftragserfassungService,
              public dialog: MatDialog) { }



  ngOnInit(): void {
    this.auftragsservice.getUserss().subscribe(x => {
      console.log(x);
      this.staff = x;
    });
    this.loadAssignments();
  }

  loadAssignments() {
    this.auftragsservice.getAllAssignmentsApproved().subscribe(x => {
      console.log(x);
      this.assignments = x;
      this.dataSource = this.assignments;
    });
  }

  deleteAssignment(assignment: AssignmentDto){
    this.auftragsservice.deleteAssignment(assignment.assignment_id).subscribe(x => {
      console.log(x);
      this.loadAssignments();
    });
  }

  calculateDiff( assignment: AssignmentDto) {
    const startDate = new Date(assignment.start);
    const endDate = new Date(assignment.end);
    const diffInMs = (endDate.getTime() - startDate.getTime());
    return diffInMs / (1000 * 3600 * 24) + 1 + ' Tage';
  }

  openDialogAssignment(x): void{
    console.log(x);
    const dialogRef = this.dialog.open(AuftragserfassungDialogComponent, {

      data: {selectedAssignment: x, municipals: this.municipals, costcenters: this.costcenters,
        personal: this.staff, status: this.status}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadAssignments();
    });
  }

}
