import { GetProjectMember } from "./getProjectMember";

export interface GetProject {
    id: number;
    title: string;
    description: string;
    logo: string;
    image: string;
    projectLead: string;
    projectLeadName: string;
    projectLeadEmail: string;
    projectLeadProfileImage: string;
    projectLeadEmployeeId: number;
    asignee: GetProjectMember[];
    attachment: string;
    createdAt: string;
    dueDate: string;
    budget: number;
    status: boolean;
}