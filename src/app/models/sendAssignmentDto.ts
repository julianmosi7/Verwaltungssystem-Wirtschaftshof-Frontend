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
    status: number;
    approved: boolean;
}