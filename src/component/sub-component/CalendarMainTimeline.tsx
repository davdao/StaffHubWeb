import React, { useState } from 'react';
import { staffGroup } from '../../model/staffGroup';
import strings from '../../utils/resources';
import styles from '../../utils/styles.module.scss';
import TimelineGridRow from './timeline-component/timelineGridRow';
import { memberShift } from '../../model/memberShift';
import moment from 'moment';
import { MessageBar } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar';
import TimelineCommandBar from './timeline-component/timelineCommandBar';
import { Panel } from 'office-ui-fabric-react/lib/components/Panel/Panel';
import EventForm from './calendarForm/EventForm';
import { PanelType } from 'office-ui-fabric-react/lib/components/Panel/Panel.types';

const CalendarMainTimeline = (props : { staffingGroup: staffGroup, 
                                        clientList,
                                        currentDays:string, 
                                        calendarDays: string[], 
                                        calendarYearName: string,
                                        calendarMonthName: string,
                                        ClearMessage,
                                        timelineMessage, 
                                        timelineTypeMessage,
                                        AddEvent:((e, i) => void),
                                        UpdateEvent:((e, i, u) => void), 
                                        DeleteEvent:((i, u) => void) } ) => {
                                            
    const [currentCalendarMonthNumber] = useState(moment().format("MM"));
    const [currentCalendarYearName] = useState(moment().format("YYYY"));
    const [showPanel, setShowPanel] = useState(false);
    const [panelUserName, setpanelUserName] = useState("");
    const [panelUserEmail, setpanelUserEmail] = useState("");
    const [selectedDate, setSelectedDate] = useState();
    const [eventToModify, setEventToModify] = useState();

      
    function OnOpenNewForm(_day, _userEmail)
    {    
        setEventToModify(undefined);    
        if(_day !== "" && _userEmail !== "") {

            setSelectedDate(new Date(Number.parseInt(props.calendarYearName), Number.parseInt(moment().month(props.calendarMonthName).format("MM"))-1, _day));
            setpanelUserEmail(_userEmail);
            setpanelUserName(props.staffingGroup.members.filter(u => u.email === _userEmail)[0].name);
        }
        else {
            setpanelUserName("");
            setSelectedDate(null);
        }
            
        setShowPanel(true);
    }

    function OnOpenEditForm(_eventId, _userEmail) {
        try {
            let members:memberShift = props.staffingGroup.members.find((u => u.email === _userEmail))!;
            let eventItemToModify = members.shiftArray.find(e => e.id === _eventId)!;
            
            setEventToModify(eventItemToModify);
            setpanelUserEmail(members.email);
            setShowPanel(true);
        } catch (error) {
            
        }
    }

    function DisablePastDate(_splitedDate: string[]){
        if((parseInt(_splitedDate[0]) < parseInt(props.currentDays) &&
                     _splitedDate[2] === currentCalendarMonthNumber &&
                    _splitedDate[3] <= currentCalendarYearName)
              || 
            (_splitedDate[3] < currentCalendarYearName)
            ||
            (_splitedDate[2] < currentCalendarMonthNumber && 
             _splitedDate[3] <= currentCalendarYearName)
            ) 
            return styles.days + " " + styles.daysGrey;
        else if(parseInt(_splitedDate[0]) === parseInt(props.currentDays) &&
                 _splitedDate[2] === currentCalendarMonthNumber &&
                  _splitedDate[3] === currentCalendarYearName) {
            return styles.days + " " + styles.daysCurrent;
        }            
        else
            return styles.days;
    }

    function DisplayMessage() {
        let htmlContent = <MessageBar messageBarType={props.timelineTypeMessage} isMultiline={false} onDismiss={() => props.ClearMessage()}  dismissButtonAriaLabel="Close">
                                {props.timelineMessage}
                            </MessageBar>
                            
        return htmlContent
    }

    return(
            <div className={styles.mainTimeline}>
                <div className={styles.timelineTimeContainer}>
                    <div className={styles.monthTimeline}>
                        <div className={styles.monthTimelineTitle}>
                            {strings.staffHubMonth}
                        </div>
                    </div>
                    <div className={styles.daysGrid}>
                        {
                            props.calendarDays.map((day: string, index: number) => {
                                let splitedDay = day.split(" ");
                                return(
                                    <div className={DisablePastDate(splitedDay)} key={day + " " + index}>
                                        <div className={styles.daysNumber}>{splitedDay[0]}</div>
                                        <div className={styles.daysName}>{splitedDay[1]}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
                <div className={styles.timelineGroupContainer}>
                    <div className={styles.timelineGroupContainerMonthWork}>
                        <div className={styles.timelineGroupContainerMonthWorkTitle}>
                            {strings.staffHubLeftPanelTitle}
                        </div>
                    </div>
                    <div className={styles.timelineGroupContainerName}>                        
                        <TimelineCommandBar OnOpenNewForm={() => OnOpenNewForm("", "")}/>
                        <div className={styles.timelineGroupContainerNameTitle}>
                            {props.staffingGroup.name}
                        </div>
                    </div>
                    
                </div>
                {
                    props.timelineMessage.length > 0 &&
                        DisplayMessage()
                }
                <div className={styles.timelineGrid}>
                {
                    props.staffingGroup.members.map((member:memberShift, index) => {
                        return( <TimelineGridRow calendarDays={props.calendarDays} 
                                                 currentMember={member}      
                                                 currentMonthNumber={parseInt(props.calendarDays[0].split(" ")[2])}                                            
                                                 onOpenNewForm={(dayIndex) => { OnOpenNewForm(dayIndex, member.email) }}
                                                 updateEvent={(eventId, userEmail) => { OnOpenEditForm(eventId, userEmail)}}
                                                 key={index}/>)                    
                    })                    
                }
                </div>
            <Panel
                closeButtonAriaLabel="Close"
                isOpen={showPanel}
                onDismiss={() => setShowPanel(false)}
                isLightDismiss={true}
                type={PanelType.custom}
                customWidth="500px"
                headerText={strings.staffHubNewFormTitle + (panelUserName.length > 0 ? " \"" + panelUserName + "\"" : "")}>
                    <EventForm userEmail={panelUserEmail} 
                             selectedDate={selectedDate ? selectedDate : new Date()} 
                             listMembers={selectedDate ? [] : props.staffingGroup.members}
                             clientList={props.clientList}
                             eventToUpdate={eventToModify}
                             updateEvent={(eventId, userEmail, event) => { setShowPanel(false); props.UpdateEvent(eventId, userEmail, event)}}
                             deleteEvent={(eventId, userEmail) => { setShowPanel(false); props.DeleteEvent(eventId, userEmail)}}
                             addNewItem={(userEmail, event) => { setShowPanel(false); props.AddEvent(userEmail, event)}}/>
            </Panel>
            </div>
    );
}

export default CalendarMainTimeline;