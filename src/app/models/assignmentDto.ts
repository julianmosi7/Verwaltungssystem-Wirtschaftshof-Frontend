import { CostcenterDto } from "./costcenterDto";
import { MunicipalDto } from "./municipalDto";
import { StatusDto } from "./statusDto";
import { UserDto } from "./userDto";

export class AssignmentDto{
    assignment_id: number;
    costcenter: CostcenterDto;
    municipal: MunicipalDto;
    email: String;
    link: String;
    assignmentDescription: String;
    personal: UserDto[];
    start: Date;
    //duration: number;
    end: Date;
    progress: number;
    status: StatusDto;
    approved: boolean;
}
