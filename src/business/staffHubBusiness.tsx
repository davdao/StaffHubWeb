import { staffGroup } from "../model/staffGroup";
import { shift } from "../model/shift";
import { memberShift } from "../model/memberShift";
import { Config } from "../utils/constants";
import { ResultBase } from "../model/httpRequest/resultbase";

export default class staffHubBusiness {

    public static GetActivityById(_id: string) {
        return new Promise<ResultBase<staffGroup>>((resolve, reject) => {
        fetch(Config.ApiUrl.Activity.GetById.replace("{0}", _id), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp: Response) => {
                resp.json()
                .then((res: ResultBase<staffGroup>) => {
                    resolve(res);
                });
            })
            .catch((error) => {
                reject([]);
            }) ;
        });
    }

    public static AddNewClient(_clientList, _client) {
        //Check if client exist or not
        if(!_clientList.some(u => u.name.toLocaleLowerCase() === _client.toLocaleLowerCase())) {
            _clientList.push({ key:_client.replace(" ", ""), name:_client })
        }
        return _clientList;
    }

    public static AddItem(_userEmail: string, _item: shift, _staffingGroup: staffGroup)
    {
        if(_staffingGroup.members.some(u => u.email === _userEmail)) {
            let user: memberShift = _staffingGroup.members.find(u => u.email === _userEmail)!;    
            user.shiftArray.push(_item);
        }
        return _staffingGroup;
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

        return _staffingGroup
    }

    public static DeleteItem(_userEmail: string, _itemId: string, _staffingGroup: staffGroup)
    {
        if(_userEmail === "" || _itemId === "" )
            throw new Error("Paramètre 'Email' ou 'Id' manquant");

        if(_staffingGroup.members.some(u => u.email === _userEmail)) {
            let user: memberShift = _staffingGroup.members.find(u => u.email === _userEmail)!; 
            user.shiftArray = user.shiftArray.filter(u => u.id !== _itemId)
        }
        return _staffingGroup;
    }
}