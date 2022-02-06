import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuftragserfassungService } from 'src/app/core/auftragserfassung.service';
import { AssignmentDialogData } from 'src/app/models/assignmentDialogData';
import { AssignmentDto } from 'src/app/models/assignmentDto';
import { UserDto } from 'src/app/models/userDto';

@Component({
  selector: 'app-auftragserfassung-dialog',
  templateUrl: './auftragserfassung-dialog.component.html',
  styleUrls: ['./auftragserfassung-dialog.component.css']
})
export class AuftragserfassungDialogComponent implements OnInit {

  assignment: AssignmentDto;

  assignmentFormGroup = new FormGroup({
    municipal: new FormControl(this.data.selectedAssignment.municipal.municipalId, Validators.required),
    costcenter: new FormControl(this.data.selectedAssignment.costcenter.costCenterId, Validators.required),
    email: new FormControl(this.data.selectedAssignment.email, Validators.required),
    assignmentLink: new FormControl(this.data.selectedAssignment.link),
    assignmentDescription: new FormControl(this.data.selectedAssignment.assignmentDescription, Validators.required),
    personal: new FormControl(this.data.selectedAssignment.personal),
    start: new FormControl(this.data.selectedAssignment.start),
    duration: new FormControl(this.data.selectedAssignment.end),
    end: new FormControl(this.data.selectedAssignment.end),
    progress: new FormControl(this.data.selectedAssignment.progress, [Validators.min(0), Validators.max(100)]),
    status: new FormControl(this.data.selectedAssignment.status.statusId),
    approved: new FormControl(this.data.selectedAssignment.approved)
  });

  get municipal() {
    return this.assignmentFormGroup.get('municipal');
  }

  personalList: number[] = [];

  constructor(public dialogRef: MatDialogRef<AuftragserfassungDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssignmentDialogData,
    private auftragsservice: AuftragserfassungService) { }

  ngOnInit(): void {
    this.data.selectedAssignment.personal.forEach(x => this.personalList.push(x.userId));
    console.log(this.personalList);
    this.assignmentFormGroup.patchValue({personal: this.personalList});
    this.assignmentFormGroup.valueChanges.subscribe(x => {
      console.log(x);

    });
    console.log(this.assignmentFormGroup.get('municipal').value);
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  updateAssignment(): void{
    console.log("update assignment...");
    console.log(this.assignmentFormGroup);
    this.assignment = {
      assignment_id: null,
      costcenter: this.assignmentFormGroup.get('costcenter').value,
      municipal: this.assignmentFormGroup.get('municipal').value,
      email: this.assignmentFormGroup.get('email').value,
      link: this.assignmentFormGroup.get('assignmentLink').value,
      assignmentDescription: this.assignmentFormGroup.get('assignmentDescription').value,
      personal: this.assignmentFormGroup.get('personal').value,
      start: this.assignmentFormGroup.get('start').value,
      end: this.assignmentFormGroup.get('end').value,
      progress: this.assignmentFormGroup.get('progress').value,
      status: this.assignmentFormGroup.get('status').value,
      approved: false
    };

    console.log(this.assignment);

    this.auftragsservice.updateAssignment(this.data.selectedAssignment.assignment_id, this.assignment).subscribe(x => {
      console.log(x);
    })
  }
}
