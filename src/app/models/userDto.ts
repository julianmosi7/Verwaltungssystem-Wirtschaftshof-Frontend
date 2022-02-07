import { AssignmentDto } from "./assignmentDto";
import { HolidayDto } from "./holidayDto";
import { LicenceDto } from "./licenceDto";
import { RoleDto } from "./roleDto";

export class UserDto{
    userId: number;
    username: String;
    password: String;
    firstname: String;
    lastname: String;
    email: String;
    birthdate: Date;
    role: RoleDto;
    licence: LicenceDto[];
    assignments: AssignmentDto[];
}
