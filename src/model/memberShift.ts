import { shift } from './shift';
import { itemWithId } from './itemWithId';

export class memberShift extends itemWithId {
    name: string = '';
    email: string = '';
    totalHours: number = 0;
    pictureUrl: string = '';
    shiftArray: shift[] = [];
    constructor(item?: memberShift) {
        super();
        if(item) {
            this.name = item.name;
            this.email = item.email;
            this.totalHours = item.totalHours;
            this.pictureUrl = item.pictureUrl;
            this.shiftArray = item.shiftArray;
        }
    }
}