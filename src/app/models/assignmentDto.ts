import { MunicipalDto } from "./municipalDto";

export class AssignmentDto{
    assignmentNumber: number;
    municipal: MunicipalDto;
    costCenter: number;
    email: String;
    assignmentLink: String;
    assignment: String;
    staffSuggestion: String;
    start: Date;
    duration: number;
    end: Date;
    progress: String;
    status: String;
}