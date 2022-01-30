import { CostCenterDto } from "./costCenterDto";
import { MunicipalDto } from "./municipalDto";
import { Status } from "./statusDto";
import { UserDto } from "./userDto";

export class AssignmentDto{
    assignmentId: number
    costCenter: CostCenterDto;
    municipal: MunicipalDto;
    email: String;
    assignmentLink: String;
    assignmentDescription: String;
    personal: UserDto[];
    start: Date;
    duration: number;
    end: Date;
    progress: number;
    status: Status;
    approved: boolean;
}