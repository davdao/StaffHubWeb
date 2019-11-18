import { staffGroup } from "../model/staffGroup";
import { memberShift } from "../model/memberShift";
import moment from "moment";
import { ITag } from "office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker.types";

export function  NewGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function GetMockUpClient() {
  let clientsList: ITag[] = [
    'Michelin',
    'GEM',
    'Grand Lyon',
    'Toray',
    'Sicam'
  ].map(item => ({ key: item, name: item }));
  
  return clientsList;
}
export function GetMockUpdate() {
    let teamStaffing:staffGroup  = new staffGroup();
    let teamMembers:memberShift[] = [        
        { memberName:'Pauline Console', email:'Console@infeeny.com', totalHours:0, pictureUrl:'', shiftArray:[
          {
            id:"toto1",
            client: "Grand Lyon",
            color: "#240058",
            endDate: "2019-12-25T00:00:00.000Z",
            startDate: "2019-10-18T00:00:00.000Z",
            title: "hum18/10-25/12",
            startDay: 18,
            startMonth: 10,
            startYear: 2019,
            endDay: 25,
            endMonth: 12,
            endYear: 2019,
          },
          {
            id:"toto01",
            client: "Grand Lyon",
            color: "#017CE6",
            startDate: "2019-10-09T00:00:00.000Z",
            endDate: "2019-11-14T00:00:00.000Z",            
            title: "sec09/10-12/11",
            startDay: 9,
            startMonth: 10,
            startYear: 2019,
            endDay: 14,
            endMonth: 11,
            endYear: 2019,
          },
          {
            id:"toto0",
            client: "Grand Lyon",
            color: "#FFBA00",
            startDate: "2019-10-09T00:00:00.000Z",
            endDate: "2019-11-12T00:00:00.000Z",            
            title: "09/10-12/11",
            startDay: 9,
            startMonth: 10,
            startYear: 2019,
            endDay: 12,
            endMonth: 11,
            endYear: 2019,
          },
          {
            id:"toto02",
            client: "Grand Lyon",
            color: "#4D8602",
            startDate: "2019-11-20T00:00:00.000Z",
            endDate: "2019-11-22T00:00:00.000Z",            
            title: "09/10-12/11",
            startDay: 20,
            startMonth: 11,
            startYear: 2019,
            endDay: 22,
            endMonth: 11,
            endYear: 2019,
          }                 
          ] }
    
    ];
    
    teamStaffing.groupName = "Modern WorkPlace";
    teamStaffing.teamMembers = teamMembers;

    return teamStaffing;
}

export function GetInitialFromName(_name: string) {
  let nameArray = _name.split(" ");
  if(nameArray.length >= 2) {
      return nameArray[0][0] + nameArray[1][0];
  }
  else if(nameArray.length === 1)
      return nameArray[0][0];
  else
      return '';
}

export function getDaysArrayByMonth(month:string, year: string) {
    var daysInMonth = moment().month(month).year(parseInt(year)).daysInMonth();
    var arrDays: string[] = [];
    let cpt = 0;
  
    while(cpt < daysInMonth) {
      cpt++;
      var current = moment().month(month).year(parseInt(year)).date(cpt).format("D dd M YYYY");
      arrDays.push(current);
    }  
    return arrDays;
}
