import { GetProjectTask } from "./getProjectTask";

export interface GetProjectPhase{
    projectId: number;
    name: string;
    color: string;
    createdAt: string;
    id: number;
    projectTasks:GetProjectTask[]
    taskCount:number;
}