export class SendAssignmentDto{
    assignment_id: number;
    costCenterId: number;
    municipalId: number;
    email: String;
    link: String;
    assignmentDescription: String;
    personal: number[];
    start: Date;
    end: Date;
    progress: number;
    statusId: number;
    approved: boolean;
}
