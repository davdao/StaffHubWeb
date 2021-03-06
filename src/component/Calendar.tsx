import React, { useState, useEffect } from 'react';
import CalendarMainTimeline from './sub-component/calendar/CalendarMainTimeline';
import CalendarMonthSelectorTimeline from './sub-component/calendar/CalendarMonthSelectorTimeline';
import CalendarHeaderParameters from './sub-component/header/CalendarHeaderParameters';
import { initializeIcons, MessageBarType, IDropdownOption } from 'office-ui-fabric-react'
import { getDaysArrayByMonth } from '../utils/helper';
import strings from '../utils/resources';
import styles from '../utils/styles.module.scss';
import { staffGroup } from '../model/staffGroup';
import staffHubBusiness from '../business/staffHubBusiness';
import { ResultBase } from '../model/httpRequest/resultbase';
import { category } from '../model/category';
import categoryBusiness from '../business/categoryBusiness';
import activityBusiness from '../business/activityBusiness';
import Parameter from './sub-component/parameter/Parameter';
import { IconLoader } from '../utils/constants';

const Calendar = (props : { urlParameters: string} ) => {
    initializeIcons();
    
    let currentDate = new Date().toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' }).split(" ");
    
    const [activityId] = useState(GetAcitivtyId(props.urlParameters));
    const [staffingGroup, setStaffingGroup] = useState(new staffGroup());
    const [categoryList, setCategoryList] = useState(new Array<IDropdownOption>());
    const [calendarCurrentDay] = useState(currentDate[0]);
    const [calendarMonthName, setCalendarMonthName] = useState(currentDate[1]);
    const [calendarYearName, setCalendarYearName] = useState(currentDate[2]);
    const [calendarDays, setCalendarDays] = useState(getDaysArrayByMonth(calendarMonthName, calendarYearName));    
    const [timelineMessage, setTimelineMessage] = useState("");
    const [timelineTypeMessage, setTimelineTypeMessage] = useState();
    const [planningSelected, setPlanningSelected] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {        
        setIsLoading(true);
        activityBusiness.GetActivityById(activityId).then((result:ResultBase<staffGroup>) => {  setStaffingGroup(result.item!); }).then(() => { setIsLoading(false); })
        categoryBusiness.GetAllCategory().then((result:ResultBase<category>) => { setCategoryList(result.data.map((item) => ({ key: item.id!, text: item.name, color: item.color }))); }) 
    }, [activityId])

    function GetAcitivtyId(_url: string) {
        let returnValue = '1';
        if(_url.indexOf("activityId") !== -1)
            returnValue = _url.split('=')[1];
        
        return returnValue;
    }

    function resetCurrentCalendarDate() 
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
            staffHubBusiness.AddNewEvent(_userEmail, _item, staffingGroup, activityId).then((result) => {
                setStaffingGroup(result);
            })                  
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
     
    function SetBtnParameters(value) {
        setPlanningSelected(value);
    }

    function RefreshCategory()
    {
        categoryBusiness.GetAllCategory().then((result:ResultBase<category>) => { setCategoryList(result.data.map((item) => ({ key: item.id!, text: item.name, color: item.color }))); }) 
    }

    function removeCategoryItem(categoryToRemove)
    {
        setCategoryList(categoryList.filter(u => u !== categoryToRemove));
    }

    return(
        <div> 
            {   
                isLoading ?
                    <div className={styles.calendarLoaderContainer}>
                        <IconLoader />
                    </div>
                :
                    <div>
                        <CalendarHeaderParameters OnClickedHeaderBtn={(e) => SetBtnParameters(e)} planningSelected={planningSelected}/>                                
                        {
                            planningSelected ? 
                                <div>
                                    <CalendarMonthSelectorTimeline getCalendarCurrentDate={setCurrentCalendarDate} 
                                                                    resetCalendarCurrentDate={resetCurrentCalendarDate}
                                                                    calendarMonthName={calendarMonthName}
                                                                    calendarYearName={calendarYearName} />
                                    <CalendarMainTimeline staffingGroup={staffingGroup} 
                                                        categoryList={categoryList}
                                                        currentDays={calendarCurrentDay}
                                                        calendarDays={calendarDays}
                                                        calendarYearName={calendarYearName}
                                                        calendarMonthName={calendarMonthName}
                                                        clearMessage={ClearMessage}
                                                        timelineMessage={timelineMessage}
                                                        timelineTypeMessage={timelineTypeMessage}
                                                        AddEvent={AddEvent}
                                                        UpdateEvent={UpdateEvent}
                                                        DeleteEvent={DeleteEvent} />                                                                   
                                </div>
                            :
                                <Parameter staffingGroup={staffingGroup} 
                                        categoryList={categoryList}
                                        refreshCategoryList={RefreshCategory}
                                        removeCategoryItem={removeCategoryItem}
                                        />
                        }
                                                        
                        
                    </div>
            }
        </div>
    )

}

export default Calendar;