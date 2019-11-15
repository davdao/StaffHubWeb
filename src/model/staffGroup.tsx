import { memberShift } from './memberShift';

export class staffGroup {
    groupName: string = '';
    teamMembers: memberShift[] = [];
    show: boolean = true;

    constructor(a? : staffGroup) {
        this.show = true;
        
        if(a) {
            this.groupName = a.groupName;
            this.teamMembers = a.teamMembers;            
        }
    }
}