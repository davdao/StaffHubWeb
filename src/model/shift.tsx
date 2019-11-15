import { NewGuid } from "../utils/helper";

export class shift {
    id?: string = '';
    title: string = '';
    startDate: string = '';
    startYear?: number = 0;
    startDay?: number = 0;
    startMonth?: number = 0;    
    endDate: string = '';
    endDay?: number = 0;
    endMonth?: number = 0;
    endYear?: number = 0;
    client: string = '';
    color: string = '';

    constructor(item? : shift) {
        if(item) {
            this.id = NewGuid();
            this.title = item.title;
            this.startDate = item.startDate;
            this.endDate = item.endDate;
            this.client = item.client;
            this.color = item.color;

            let startDateObj = new Date(item.startDate);            
            this.startDay = startDateObj.getDate();
            this.startMonth = startDateObj.getMonth()+1;
            this.startYear = startDateObj.getUTCFullYear();

            let endDateObj = new Date(item.endDate);
            this.endDay = endDateObj.getDate();
            this.endMonth = endDateObj.getMonth()+1;
            this.endYear = endDateObj.getUTCFullYear();
        }
    }
}