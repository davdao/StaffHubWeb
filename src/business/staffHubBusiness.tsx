import { staffGroup } from "../model/staffGroup";
import { shift } from "../model/shift";
import { memberShift } from "../model/memberShift";


export default class staffHubBusiness {

    public static AddItem(_userEmail: string, _item: shift, _staffingGroup: staffGroup)
    {
        if(_staffingGroup.teamMembers.some(u => u.email === _userEmail)) {
            let user: memberShift = _staffingGroup.teamMembers.find(u => u.email === _userEmail)!;    
            user.shiftArray.push(_item);
        }
        return _staffingGroup;
    }

    public static UpdateItem()
    {

    }

    public static GetItem()
    {

    }
}