import React, { useState } from 'react';
import { staffGroup } from '../../model/staffGroup';
import strings from '../../utils/resources';
import styles from '../../utils/styles.module.scss';
import TimelineGridRow from './timeline-component/timelineGridRow';
import { memberShift } from '../../model/memberShift';
import moment from 'moment';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton';

const CalendarMainTimeline = (props : { staffingGroup: staffGroup, currentDays:string, calendarDays: string[], OnOpenNewForm, updateTimelineEvent } ) => {
    const [groupName] = useState(props.staffingGroup.groupName);
    const [currentCalendarMonthNumber] = useState(moment().format("MM"));
    const [currentCalendarYearName] = useState(moment().format("YYYY"));

    function DisablePastDate(_splitedDate: string[]){
        if((parseInt(_splitedDate[0]) < parseInt(props.currentDays) &&
                     _splitedDate[2] === currentCalendarMonthNumber &&
                    _splitedDate[4] <= currentCalendarYearName)
              || 
            (_splitedDate[4] < currentCalendarYearName)
            ||
            (_splitedDate[2] < currentCalendarMonthNumber && 
             _splitedDate[4] <= currentCalendarYearName)
            ) 
            return styles.days + " " + styles.daysGrey;
        else if(parseInt(_splitedDate[0]) === parseInt(props.currentDays) &&
                 _splitedDate[2] === currentCalendarMonthNumber &&
                  _splitedDate[4] === currentCalendarYearName) {
            return styles.days + " " + styles.daysCurrent;
        }            
        else
            return styles.days;
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
                        <PrimaryButton text={strings.staffHubNewFormBtnNew} onClick={() => props.OnOpenNewForm("", "")}/>
                        <div className={styles.timelineGroupContainerNameTitle}>
                            {groupName}
                        </div>
                    </div>
                    
                </div>
                <div className={styles.timelineGrid}>
                {
                    props.staffingGroup.teamMembers.map((member:memberShift, index) => {
                        return( <TimelineGridRow calendarDays={props.calendarDays} 
                                                 currentMember={member}      
                                                 currentMonthNumber={parseInt(props.calendarDays[0].split(" ")[2])}                                            
                                                 onOpenNewForm={(dayIndex) => { props.OnOpenNewForm(dayIndex, member.email) }}
                                                 updateEvent={(eventId, userEmail) => { props.updateTimelineEvent(eventId, userEmail)}}
                                                 key={index}/>)                    
                    })                    
                }
                </div>
            </div>
    );
}

export default CalendarMainTimeline;