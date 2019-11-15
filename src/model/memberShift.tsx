import { shift } from './shift';

export class memberShift {
    memberName: string = '';
    email: string = '';
    totalHours: number = 0;
    pictureUrl: string = '';
    shiftArray: shift[] = [];
    constructor(item?: memberShift) {
        if(item) {
            this.memberName = item.memberName;
            this.email = item.email;
            this.totalHours = item.totalHours;
            this.pictureUrl = item.pictureUrl;
            this.shiftArray = item.shiftArray;
        }
    }
}