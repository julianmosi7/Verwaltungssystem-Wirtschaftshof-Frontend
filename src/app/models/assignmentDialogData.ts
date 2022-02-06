import { AssignmentDto } from "./assignmentDto";
import { CostcenterDto } from "./costcenterDto";
import { MunicipalDto } from "./municipalDto";
import { StatusDto } from "./statusDto";
import { UserDto } from "./userDto";

export class AssignmentDialogData{
    selectedAssignment: AssignmentDto;
    municipals: MunicipalDto[];
    costcenters: CostcenterDto[];
    personal: UserDto[];
    status: StatusDto[];
}