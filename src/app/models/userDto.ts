import { AssignmentDto } from "./assignmentDto";
import { HolidayDto } from "./holidayDto";
import { LicenceDto } from "./licenceDto";
import { RoleDto } from "./roleDto";

export class UserDto{
    userId: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    birthdate: Date;
    role: RoleDto;
    licence: LicenceDto;
    holidays: HolidayDto;
    assignments: AssignmentDto;
}