import React, { useState, useEffect } from 'react';
import CalendarMainTimeline from './sub-component/CalendarMainTimeline';
import CalendarHeaderTimeline from './sub-component/CalendarHeaderTimeline';
import CalendarHeaderParameters from './sub-component/CalendarHeaderParameters';
import { GetMockUpdate, GetMockUpClient } from '../utils/helper';
import { initializeIcons, MessageBarType } from 'office-ui-fabric-react'
import { getDaysArrayByMonth } from '../utils/helper';
import strings from '../utils/resources';
import staffHubBusiness from '../business/staffHubBusiness';
import { staffGroup } from '../model/staffGroup';
import { ResultBase } from '../model/httpRequest/resultbase';

const Calendar = () => {
    initializeIcons();

    let currentDate = new Date().toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' }).split(" ");
    
    const [staffingGroup, setStaffingGroup] = useState(new staffGroup());
    const [clientList, setClientList] = useState(GetMockUpClient());
    const [calendarCurrentDay] = useState(currentDate[0]);
    const [calendarMonthName, setCalendarMonthName] = useState(currentDate[1]);
    const [calendarYearName, setCalendarYearName] = useState(currentDate[2]);
    const [calendarDays, setCalendarDays] = useState(getDaysArrayByMonth(calendarMonthName, calendarYearName));    
    const [timelineMessage, setTimelineMessage] = useState("");
    const [timelineTypeMessage, setTimelineTypeMessage] = useState();

    useEffect(() => {
        staffHubBusiness.GetActivityById("1").then((result:ResultBase<staffGroup>) => {  setStaffingGroup(result.item!) }) 
    })

    function resetCurrentCalndarDate() 
    {
        let date = new Date().toLocaleString('default', { month: 'long', year: 'numeric' }).split(" ");
        setCalendarMonthName(date[0]);
        setCalendarYearName(date[1]);
        setCalendarDays(getDaysArrayByMonth(date[0], date[1]));        
    }

    function setCurrentCalendarDate(_date: string)
    {
        let date = _date.split(" ");
        setCalendarMonthName(date[1]);
        setCalendarYearName(date[2]);
        setCalendarDays(getDaysArrayByMonth(date[1], date[2]));        
    }    

    
    function AddEvent(_userEmail, _item) {
        try {                        
            setClientList(staffHubBusiness.AddNewClient(clientList, _item.client));
            setStaffingGroup(staffHubBusiness.AddItem(_userEmail, _item, staffingGroup));
        } catch (error) {
            
        }            
    }

    function UpdateEvent(_eventId, _userEmail, _item) {
        try { 
            setStaffingGroup(staffHubBusiness.UpdateItem(_userEmail, _eventId, _item, staffingGroup));
        } catch (error) {
            
        }
    }

    function DeleteEvent(_eventId, _userEmail) {
        try {  
            setStaffingGroup(staffHubBusiness.DeleteItem(_userEmail, _eventId, staffingGroup));
        } catch (error) {
            setTimelineMessage(strings.staffHubError + " : " + error.message);
            setTimelineTypeMessage(MessageBarType.error);
            
        }     
    }

    function ClearMessage(){
        setTimelineMessage("");
        setTimelineTypeMessage(undefined);
    }
      
    return(
        <div>
            <div>
                <CalendarHeaderParameters />
                <CalendarHeaderTimeline getCalendarCurrentDate={setCurrentCalendarDate} 
                                        resetCalendarCurrentDate={resetCurrentCalndarDate}
                                        calendarMonthName={calendarMonthName}
                                        calendarYearName={calendarYearName} />
                <CalendarMainTimeline   staffingGroup={staffingGroup} 
                                        clientList={clientList}
                                        currentDays={calendarCurrentDay}
                                        calendarDays={calendarDays}
                                        calendarYearName={calendarYearName}
                                        calendarMonthName={calendarMonthName}
                                        ClearMessage={ClearMessage}
                                        timelineMessage={timelineMessage}
                                        timelineTypeMessage={timelineTypeMessage}
                                        AddEvent={AddEvent}
                                        UpdateEvent={UpdateEvent}
                                        DeleteEvent={DeleteEvent}
                                        />
            </div>
        </div>
    )

}

export default Calendar;