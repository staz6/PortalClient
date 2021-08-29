import { PostProjectMember } from "./postProjectMember";

export interface PostProject{
    title: string;
        description: string;
        logo: string;
        image: string;
        projectLead: string;
        projectMembers: PostProjectMember[];
        attachment: string;
        dueDate: Date;
        budget: number;
}