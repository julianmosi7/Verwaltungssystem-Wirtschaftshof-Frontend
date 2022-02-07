import {DayPilot} from 'daypilot-pro-angular';
import ResourceData = DayPilot.ResourceData;


export class userDataCalDto implements ResourceData{
  id: number;
  name: string;

  [prop: string]: any;

  areas: DayPilot.AreaData[];
  ariaLabel: string;
  backColor: string;
  bubbleHtml: string;
  cellsAutoUpdated: boolean;
  cellsDisabled: boolean;
  children: DayPilot.ResourceData[];
  columns: { text?: string; html?: string; cssClass?: string; backColor?: string }[];
  contextMenu: DayPilot.Menu;
  cssClass: string;
  dynamicChildren: boolean;
  eventHeight: number;
  eventStackingLineHeight: number;
  expanded: boolean;
  fontColor: string;
  frozen: "top" | "bottom";
  html: string;
  marginBottom: number;
  marginTop: number;
  minHeight: number;
  moveDisabled: boolean;
  tags: any;
  toolTip: string;

}
