import { staffGroup } from "../model/staffGroup";
import { shift } from "../model/shift";
import { memberShift } from "../model/memberShift";
import memberBusiness from "./memberBusiness";

export default class staffHubBusiness {    
    public static AddNewEvent(_userEmail: string, _item: shift, _staffingGroup: staffGroup, _activityId: string)
    {
        return new Promise<staffGroup>((resolve, reject) => {
        if(_staffingGroup.members.some(u => u.email === _userEmail)) {
            let user: memberShift = _staffingGroup.members.find(u => u.email === _userEmail)!;   
            
            memberBusiness.AddMemberEvent(_userEmail, _item, _activityId).then((itemAdded) => {
                _item.id = itemAdded.item!.id;
            })
            user.shiftArray.push(_item);
            resolve(_staffingGroup);
        }
        });
    }

    public static UpdateItem(_userEmail: string, _itemId: string, _itemToUpdate: shift, _staffingGroup: staffGroup)
    {
        if(_userEmail === "" || _itemId === "" )
            throw new Error("Paramètre 'Email' ou 'Id' manquant");

        let user: memberShift = _staffingGroup.members.find(u => u.email === _userEmail)!; 
        let itemToUpdate = user.shiftArray.filter(u => u.id === _itemId);

        if(!itemToUpdate)
            throw new Error("Erreur lors de la modification d'un élément");

        itemToUpdate[0].title = _itemToUpdate.title;
        itemToUpdate[0].startDate = _itemToUpdate.startDate;
        itemToUpdate[0].endDate = _itemToUpdate.endDate;
        itemToUpdate[0].client = _itemToUpdate.client;
        itemToUpdate[0].color = _itemToUpdate.color;
        
        let startDateObj = new Date(_itemToUpdate.startDate);
        let endDateObj = new Date(_itemToUpdate.endDate);

        itemToUpdate[0].startDay = startDateObj.getDate();
        itemToUpdate[0].startMonth = startDateObj.getMonth()+1;
        itemToUpdate[0].startYear = startDateObj.getFullYear();
        itemToUpdate[0].endDay =  endDateObj.getDate()
        itemToUpdate[0].endMonth = endDateObj.getMonth()+1;
        itemToUpdate[0].endYear = endDateObj.getFullYear();

        memberBusiness.UpdateMemberEvent(itemToUpdate[0]);
        return _staffingGroup
    }

    public static DeleteItem(_userEmail: string, _itemId: string, _staffingGroup: staffGroup)
    {
        if(_userEmail === "" || _itemId === "" )
            throw new Error("Paramètre 'Email' ou 'Id' manquant");

        if(_staffingGroup.members.some(u => u.email === _userEmail)) {
            let user: memberShift = _staffingGroup.members.find(u => u.email === _userEmail)!; 

            let itemToDelte = user.shiftArray.filter(i => i.id === _itemId);
            if(itemToDelte.length > 0) {
                user.shiftArray = user.shiftArray.filter(u => u.id !== itemToDelte[0].id)
                memberBusiness.DeleteMemberEvent(itemToDelte[0]);
            }
        }
        return _staffingGroup;
    }
}