import { PostProjectTaskAsignee } from "./postProjectTaskAsignee";

export interface PostProjectTask{
        projectPhaseId: number;
        title: string;
        description: string;
        attachement: string;
        legend: string;
        piority: number;
        projectAsignee: PostProjectTaskAsignee[];
        reporter: string;
        startDate: Date;
        dueDate: Date;
}