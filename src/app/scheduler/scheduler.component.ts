import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {DayPilot, DayPilotSchedulerComponent} from 'daypilot-pro-angular';
import {AuftragserfassungService} from '../core/auftragserfassung.service';
import ResourceData = DayPilot.ResourceData;
import {UserDto} from '../models/userDto';
import {userDataCalDto} from '../models/UserDataCalDto';
import {AssignmentDto} from '../models/assignmentDto';


@Component({
  selector: 'app-scheduler',
  template: `<daypilot-scheduler [config]="config" [events]="events"#scheduler></daypilot-scheduler>`
})
export class SchedulerComponent implements AfterViewInit{
  staff: UserDto[] = [];
  assignment: AssignmentDto[] = [];
  @ViewChild('scheduler')
  scheduler!: DayPilotSchedulerComponent;
  config: any = {
    scale: 'Day',
    startDate: DayPilot.Date.today().firstDayOfMonth(),
    days: DayPilot.Date.today().daysInMonth(),
    timeHeaders: [
      {groupBy: 'Month'},
      {groupBy: 'Day', format: 'd'}
    ],
  };
  events: [

  ];

  constructor(private ds: AuftragserfassungService) {
  }

  ngAfterViewInit(): void {
    this.ds.getUsersCal().subscribe((resources: DayPilot.ResourceData[]) => this.scheduler.control.update({resources}));


    this.createEvents();
  }

  createEvents(){

    this.ds.getUserss().subscribe(x => {
      console.log(x);
      this.staff = x;
    });

    this.ds.getAssignemntsFromUser(1).subscribe(x => {
      console.log(x);
      this.assignment = x;

    });



    /*this.staff.forEach(x => { this.ds.getAssignemntsFromUser(x.userId).forEach(a => {
       a.forEach(asi => {
         console.log("hier:"+ asi.assignmentDescription);
         this.scheduler.events.push({text: asi.assignmentDescription.toString(), id: '1', resource: x.userId, start: '2022-02-02T10:00:00', end: '2022-02-02T14:00:00'});
         this.scheduler.config.update();

       });
      });

    });*/
    console.log(this.scheduler.events);
    for (const entry of this.staff) {
      console.log(entry); // 1, "string", false
    }

   // this.scheduler.control.update();

    // this.events.push( [{id: '1', text: 'Activity', start: '2022-02-02', end: '2022-02-02', resource: '1'}]);
  }



}
