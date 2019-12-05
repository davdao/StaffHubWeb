import moment from "moment";

export function  NewGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
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
