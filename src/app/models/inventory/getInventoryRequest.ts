export interface GetInventoryRequest{
    requestedBy:string;
    description:string;
    subject:string; 
    date:string;
    dateApproved:string;
    status:string
    returned:boolean
    inventoryName:string;
    inventoryId:number
}