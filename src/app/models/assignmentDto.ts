import { CostCenter } from "./costCenter";
import { MunicipalDto } from "./municipalDto";
import { UserDto } from "./userDto";

export class AssignmentDto{
    assignmentId: number
    costCenter: CostCenter;
    municipal: MunicipalDto;
    email: String;
    assignmentLink: String;
    assignment: String;
    staffSuggestion: string;
    start: Date;
    duration: number;
    end: Date;
    progress: String;
    status: String;
    approved: boolean;
}