import { CostCenter } from "./costCenter";
import { MunicipalDto } from "./municipalDto";
import { Status } from "./statusDto";
import { UserDto } from "./userDto";

export class AssignmentDto{
    assignmentId: number
    costCenter: CostCenter;
    municipal: MunicipalDto;
    email: String;
    assignmentLink: String;
    assignmentDescription: String;
    staffSuggestion: UserDto[];
    start: Date;
    duration: number;
    end: Date;
    progress: number;
    status: Status;
    approved: boolean;
}