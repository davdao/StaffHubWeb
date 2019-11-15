import React, { useState } from 'react';
import CalendarMainTimeline from './sub-component/CalendarMainTimeline';
import CalendarHeaderTimeline from './sub-component/CalendarHeaderTimeline';
import CalendarHeaderParameters from './sub-component/CalendarHeaderParameters';
import { GetMockUpdate } from '../utils/helper';
import { initializeIcons } from 'office-ui-fabric-react'
import { getDaysArrayByMonth } from '../utils/helper';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import strings from '../utils/resources';
import EventForm from './sub-component/calendarForm/EventForm';
import moment from 'moment';
import staffHubBusiness from '../business/staffHubBusiness';
import { memberShift } from '../model/memberShift';

const Calendar = () => {
    initializeIcons();

    let currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' }).split(" ");
    
    const [staffingGroup, setStaffingGroup] = useState(GetMockUpdate());    
    const [calendarCurrentDay] = useState(currentDate[0]);
    const [calendarMonthName, setCalendarMonthName] = useState(currentDate[1]);
    const [calendarYearName, setCalendarYearName] = useState(currentDate[2]);
    const [calendarDays, setCalendarDays] = useState(getDaysArrayByMonth(calendarMonthName, calendarYearName));
    const [showPanel, setShowPanel] = useState(false);
    const [panelUserName, setpanelUserName] = useState("");
    const [panelUserEmail, setpanelUserEmail] = useState("");
    const [selectedDate, setSelectedDate] = useState();
    const [eventToModify, setEventToModify] = useState();

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

    function OnOpenNewForm(_day, _userName)
    {        
        if(_day !== "" && _userName !== "") {
            setSelectedDate(new Date(Number.parseInt(calendarYearName), Number.parseInt(moment().month(calendarMonthName).format("MM"))-1, _day));
            setpanelUserName(_userName);
            setpanelUserEmail(staffingGroup.teamMembers.filter(u => u.email === _userName)[0].memberName);
        }
        else {
            setpanelUserName("");
            setSelectedDate(null);
        }
            
        setShowPanel(true);
    }

    function UpdateEvent(_eventId, _userEmail) {
        let members:memberShift = staffingGroup.teamMembers.find((u => u.email === _userEmail))!;
        let eventItemToModify = members.shiftArray.find(e => e.id === _eventId)!;
        
        setEventToModify(eventItemToModify);
        setpanelUserEmail(members.memberName);
        setShowPanel(true);
    }

    function AddEvent(userEmail, item) {
        setStaffingGroup(staffHubBusiness.AddItem(userEmail, item, staffingGroup));
    }

    function DeleteEvent() {

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
                                        currentDays={calendarCurrentDay}
                                        calendarDays={calendarDays}
                                        updateTimelineEvent={(eventId, userEmail) => { UpdateEvent(eventId, userEmail)}}
                                        OnOpenNewForm={ (day, memberName) => OnOpenNewForm(day, memberName) }
                                        />
            </div>
            <div>
            <Panel
                closeButtonAriaLabel="Close"
                isOpen={showPanel}
                onDismiss={() => setShowPanel(false)}
                isLightDismiss={true}
                type={PanelType.medium}
                headerText={strings.staffHubNewFormTitle + (panelUserEmail.length > 0 ? " \"" + panelUserEmail + "\"" : "")}>
                    <EventForm userEmail={panelUserName} 
                             selectedDate={selectedDate ? selectedDate : new Date()} 
                             listMembers={selectedDate ? [] : staffingGroup.teamMembers}
                             eventToUpdate={eventToModify}
                             updateExistingItem={UpdateEvent}
                             addNewItem={AddEvent}/>
            </Panel>
            </div>
        </div>
    )

}

export default Calendar;