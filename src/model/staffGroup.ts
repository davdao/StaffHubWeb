import { memberShift } from './memberShift';
import { itemWithId } from "./itemWithId";

export class staffGroup extends itemWithId {
    name: string = '';
    tenantId: string = '';
    members: Array<memberShift> = new Array<memberShift>(); 
    show: boolean = true;    

    constructor(a? : staffGroup) {
        super();
        this.show = true;
        
        if(a) {
            this.name = a.name;
            this.tenantId = a.tenantId;
            this.members = a.members;
        }
    }
}