import { AssignmentDto } from "./assignmentDto";
import { HolidayDto } from "./holidayDto";
import { LicenceDto } from "./licenceDto";
import { RoleDto } from "./roleDto";

export class UserDto{
    userId: number;
    username: String;
    password: String;
    firstname: string;
    lastname: string;
    email: string;
    birthdate: Date;
    role: RoleDto;
    licence: LicenceDto[];
    holidays: HolidayDto[];
    assignments: AssignmentDto[];
}
