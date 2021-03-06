import React, { useState, useEffect } from 'react';
import styles from '../../../../utils/styles.module.scss';
import { memberShift } from '../../../../model/memberShift';
import { GetInitialFromName } from '../../../../utils/helper';
import { shift } from '../../../../model/shift';
import { CheckIfWeekDay } from '../../../../utils/helper';
import { fixWidth, timelineGridTopShift, fixWidth4_12Event, fixWidth12_16Event, fixWidth16_24Event, fixWidth24_28Event } from '../../../../utils/constants';

const TimelineGridRow = (props: { calendarDays: string[]; currentMember: memberShift; onOpenNewForm , currentMonthNumber: number, updateEvent}) => {    
    const [currentMonthNumber, setCurrentMonthNumber] = useState(props.currentMonthNumber);
    
    //This variable is used to store and manipulate the shift while we are loading all the data
    //We are not using the state value because we need to be updated synchroniously
    let currentGridShift = props.currentMember.shiftArray;
    let usedGridShift: shift[] = [];

    useEffect(() => {
        if(currentMonthNumber !== props.currentMonthNumber) {
            setCurrentMonthNumber(props.currentMonthNumber);
        }
            
    }, [currentMonthNumber, props.currentMonthNumber]);
    
    return (
            <div className={styles.leftMembersPanel}>
                    <div className={styles.leftMembersPanelContainer}>
                        <div className={styles.leftMembersPanelRow}>
                            <div className={styles.initial}>{GetInitialFromName(props.currentMember.name)}</div>
                            <div className={styles.memberInfoContainer}>
                                <div className={styles.name}>{props.currentMember.name}</div>
                            </div>
                        </div>                                 
                    </div>
                    <div className={styles.timelineGrid}>
                        {   
                            props.calendarDays.map((day: string, index: number) => {        
                                let splitedDay = day.split(" ");

                                return(
                                    <div className={ CheckIfWeekDay(splitedDay[1]) ? styles.timelineCell + " " + styles.timeCellWeekDay : styles.timelineCell} key={index} >
                                        <div className={styles.timelineCellBorder}>
                                            <div className={styles.timelineCell} onClick={() => {props.onOpenNewForm(index +1)} }>                                                
                                            </div>                                            
                                            {   
                                                GetShift(currentGridShift, parseInt(splitedDay[0]), parseInt(splitedDay[2]), parseInt(splitedDay[3]), props.calendarDays.length, index)
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
    );

    function GetShift(_shiftArray:shift[], _currentDay, _currentMonth, _currentYear, _totalCalandarDays, _index){
        let currentShiftArray;
        
        //Event of previous month
        if(_shiftArray.some(u => u.startMonth! < _currentMonth && u.endMonth! >= _currentMonth)) {
            currentShiftArray = _shiftArray.filter(u => u.startMonth! < _currentMonth && u.endMonth! >= _currentMonth);
        }
        else if(_shiftArray.some(u => u.startDay === _currentDay && u.startMonth === _currentMonth)) 
        {
            currentShiftArray = _shiftArray.filter(u => u.startDay === _currentDay && u.startMonth === _currentMonth);
        }
        else if(_shiftArray.some(u => u.startYear! < _currentYear && u.endMonth! === _currentMonth)) {
            currentShiftArray = _shiftArray.filter(u => u.startYear! < _currentYear && u.endMonth! === _currentMonth);
        }
        

        if(!currentShiftArray)
            return;                      
            
        let NbOverlapEvent = CheckOverlapEvent(_currentDay, _currentMonth);
        let htmlContent = GetMultipleShift(currentShiftArray, _currentDay, _currentMonth, _totalCalandarDays, NbOverlapEvent, _currentYear);
        return(htmlContent);
    }

    function GetMultipleShift(_shiftArrayObject, _currentDay, _currentMonth, _totalCalandarDays, _NbOverlapEvent, _currentYear) {
        let dynamicWith;

        let htmlContent = _shiftArrayObject.map((_shift, index) => {
            currentGridShift = currentGridShift.filter(i => i.id! !== _shift.id);
            usedGridShift.push(_shift);
            
            dynamicWith = GetShiftWidth(_shift, _currentDay, _currentMonth, _totalCalandarDays, _currentYear);                           

            if(index > 0)   
                _NbOverlapEvent++;

            if(usedGridShift.length > 1) {
                return <div key={"containsShift_" + index} onClick={() => props.updateEvent(_shift.id, props.currentMember.email)} className={styles.timelineShift} style={{ backgroundColor: _shift.category.color, width: dynamicWith, top: (_NbOverlapEvent > 1 ? timelineGridTopShift + 0.4 : timelineGridTopShift) * (_NbOverlapEvent) + "px" }}>                        
                        <span className={styles.timelineShiftTitle} >{_shift.title}</span>
                        </div>
            }
            else {
                return <div key={"notContainsShift_" + index} onClick={() => props.updateEvent(_shift.id, props.currentMember.email)}className={styles.timelineShift} style={{ backgroundColor: _shift.category.color, width: dynamicWith }}>                        
                        <span className={styles.timelineShiftTitle} >{_shift.title}</span>
                        </div>
            }
        })
        return (htmlContent);
    }

    function GetShiftWidth(_shift, _currentDay, _currentMonth, _totalCalandarDays, _currentYear) {
        let dynamicWithToReturn;
        let fixWidthValue = fixWidth;
        let diffDays:number;

        if(_shift.startMonth !== _currentMonth) 
            diffDays = _shift.endDay -1;                        
        else
            diffDays = _shift.endDay - _shift.startDay;                        

        diffDays++;
        fixWidthValue = SetWidthShiftValue(diffDays, fixWidthValue);
        if(_shift.endMonth > _currentMonth || _shift.endYear > _currentYear) 
        {
            diffDays = _totalCalandarDays +1 - _currentDay;
            fixWidthValue = SetWidthShiftValue(diffDays, fixWidthValue);
        }
        dynamicWithToReturn = (fixWidthValue*diffDays) + "%";
        return dynamicWithToReturn;
    }

    function SetWidthShiftValue(_diffDays, _fixWidthValue) {
        let fixWidthValueReturn = _fixWidthValue;

        if(_diffDays >= 5 && _diffDays <= 12) {
            fixWidthValueReturn = fixWidth4_12Event;
        }
        else if(_diffDays >= 13 && _diffDays <= 16) {
            fixWidthValueReturn = fixWidth12_16Event;
        }
        else if(_diffDays >= 17 && _diffDays <= 24) {
            fixWidthValueReturn = fixWidth16_24Event;
        }
        else if(_diffDays >= 25 && _diffDays <= 31) {
            fixWidthValueReturn = fixWidth24_28Event;
        }
        return fixWidthValueReturn;
    }
    function CheckOverlapEvent(_currentDay, _currentMonth) {
        let nbOverlapEventToReturn = 0;
        if(!usedGridShift)
            return;        

        //Get event with futur month
        if(usedGridShift.some(u => u.endMonth! > _currentMonth))  
        {
            let nbOverlapItem = usedGridShift.filter(u => u.endMonth! > _currentMonth);
            nbOverlapEventToReturn += nbOverlapItem.length;
        }
        
        //Get event with current month      
        if(usedGridShift.some(u => u.endMonth === _currentMonth && u.endDay! >= _currentDay))  
        {
            let nbOverlapItem = usedGridShift.filter(u => u.endMonth === _currentMonth && u.endDay! >= _currentDay);
            nbOverlapEventToReturn += nbOverlapItem.length;
        }
        return nbOverlapEventToReturn;       
    }
}



export default TimelineGridRow;
