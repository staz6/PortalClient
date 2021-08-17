export interface GetLeave{
    id:number;
    from: string;
    till: string;
    reason: number;
    status: boolean;
    leaveType: string;
    deductSalary:boolean;
}