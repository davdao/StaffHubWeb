import React, { useState } from 'react';
import styles from '../../../utils/styles.module.scss';
import strings from '../../../utils/resources';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown } from 'office-ui-fabric-react/lib/components/Dropdown/Dropdown';
import { calendarHours, clientsList, colorCellsStaffHub, currentLang } from '../../../utils/constants';
import { Checkbox } from 'office-ui-fabric-react/lib/components/Checkbox/Checkbox';
import { TagPicker } from 'office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker';
import { SwatchColorPicker } from 'office-ui-fabric-react/lib/components/SwatchColorPicker/SwatchColorPicker';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton';
import { MessageBar } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar';
import { MessageBarType } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar.types';
import { ITag, DefaultButton } from 'office-ui-fabric-react';
import { shift } from '../../../model/shift';

const EventForm = (props) => {

    const [eventTitle, setEventTitle] = useState(props.eventToUpdate ? props.eventToUpdate.title : "");
    const [evenMemberName, setEvenMemberName] = useState("");
    const [eventStartDate, setEventStartDate] = useState(props.eventToUpdate ? new Date(props.eventToUpdate.startDate) : props.selectedDate);
    const [eventEndDate, setEventEndDate] = useState(props.eventToUpdate ? new Date(props.eventToUpdate.endDate) : props.selectedDate);
    const [eventClientName, setEventClientName] = useState(props.eventToUpdate ? props.eventToUpdate.client : "");
    const [eventColor, setEventColor] = useState(colorCellsStaffHub[0].color);
    const [showError, setShowError] = useState(false);

    return(
        <div className={styles.addNewEventModal}>
            {
                showError &&
                <MessageBar messageBarType={MessageBarType.error} isMultiline={false} onDismiss={() => setShowError(false)} dismissButtonAriaLabel="Close">
                    {strings.staffHubNewFormSaveWarning}
                </MessageBar>
            }
            
                <div className={styles.row + " " + styles.newEventTitleEvent}>
                    <span className={styles.newEventTitle}>{strings.staffHubNewFormInputTitle}<span className={styles.required}>*</span></span>
                    <TextField defaultValue={eventTitle} autoFocus onChange={(event, value) => {setEventTitle(value!)}}/>
                </div>
                {
                    !props.eventToUpdate && props.listMembers.length > 0 &&
                    <div className={styles.row + " " + styles.newEventClient}>
                        <span className={styles.newEventTitle}>{strings.staffHubNewFormDdlMembers}<span className={styles.required}>*</span></span>
                        <Dropdown onChange={(event, option) => setEvenMemberName(option!.key.toString())} options={props.listMembers.map((u) => { return {key: u.email, text: u.memberName} })} styles={{ dropdown: { width: 200 }, dropdownItemsWrapper: { height: 220 } }}/>
                    </div>
                }
                <div className={styles.row + " " + styles.newEventStartDate}>
                    <div className={styles.dateFieldContainer}>
                        <span className={styles.newEventTitle}>{strings.staffHubNewFormStartDatePicker}<span className={styles.required}>*</span></span>                    
                        <DatePicker placeholder={strings.staffHubNewFormStartDatePickerTitle} 
                                    formatDate={(date) => OnFormatDate(date)}
                                    value={eventStartDate}
                                    onSelectDate={(date) => { setEventStartDate(date) }}
                                    ariaLabel={strings.staffHubNewFormStartDatePickerTitle} />
                    </div>
                    <div className={styles.dateHourFieldContainer}>
                        <Dropdown options={calendarHours} styles={{ dropdown: { width: 100 }, dropdownItemsWrapper: { height: 220 } }}/>
                    </div>
                    <div className={styles.allDayEventContainer}>
                        <Checkbox label={strings.staffHubNewFormChkAllDayEventTitle} />
                    </div>
                </div>
                <div className={styles.row + " " + styles.newEventStartDate}>
                    <div className={styles.dateFieldContainer}>
                        <span className={styles.newEventTitle}>{strings.staffHubNewFormStartDatePicker}<span className={styles.required}>*</span></span>
                        <DatePicker placeholder={strings.staffHubNewFormEndDatePickerTitle} 
                                    formatDate={(date) => OnFormatDate(date)}
                                    value={eventEndDate}
                                    onSelectDate={(date) => { setEventEndDate(date) }}
                                    ariaLabel={strings.staffHubNewFormEndDatePickerTitle} />
                    </div>
                    <div className={styles.dateHourFieldContainer}>
                        <Dropdown options={calendarHours} styles={{ dropdown: { width: 100 }, dropdownItemsWrapper: { height: 220 } }}/>
                    </div>
                </div>      
                <div className={styles.row + " " + styles.newEventClient}>
                    <span className={styles.newEventTitle}>{strings.staffHubNewFormCbBoxClient}<span className={styles.required}>*</span></span>
                    <TagPicker
                        onResolveSuggestions={OnFilterChanged}                    
                        pickerSuggestionsProps={{
                            suggestionsHeaderText: strings.staffHubNewFormClientPicker,
                            noResultsFoundText: strings.staffHubNewFormClientPickerNotFound
                        }}
                        itemLimit={1}
                        defaultSelectedItems={clientsList.filter(u => u.name === eventClientName) }
                        onInputChange={(value) => {  if(value !== "") {setEventClientName("value")} return value} }                        
                        onChange={(item: ITag[] | undefined) => { if(item!.length > 0) { setEventClientName(item![0].name) } else { setEventClientName("") }                             }}
                        styles={ { root: { width: 250 } } }
                        />
                </div> 
                <div className={styles.row + " " + styles.newEventClient}>
                    <span className={styles.newEventTitle}>{strings.staffHubNewFormColor}</span>
                    <SwatchColorPicker onColorChanged={(prop) => { colorCellsStaffHub.some(u => u.id === prop) ? setEventColor(colorCellsStaffHub.find(u => u.id === prop)!.color) : setEventColor(colorCellsStaffHub[0].color) }} 
                                        columnCount={5} 
                                        cellShape={'circle'} 
                                        colorCells={colorCellsStaffHub} 
                                        selectedId={colorCellsStaffHub.find(u => u.color === props.eventToUpdate.color)!.id} />
                </div> 
                <div className={styles.row + " " + styles.newEventButton}>
                    <div className={styles.newEventDeleteButton}>
                    <DefaultButton text={strings.staffHubNewFormBtnDelete} onClick={SaveEvent}/>
                    </div>
                    <div className={styles.newEventSaveButton}>
                        <PrimaryButton text={strings.staffHubNewFormBtnSave} onClick={SaveEvent}/>
                    </div>                        
                </div>     
        </div>
    )

    function SaveEvent() {
        //If zero then we don't need to save members
        if(props.listMembers.length === 0)
        {
            if(eventTitle === "" || eventClientName === "" )
                setShowError(true)
            else {
                props.addNewItem(props.userEmail ,new shift({
                    title : eventTitle,
                    startDate: eventStartDate.toISOString(),
                    endDate: eventEndDate.toISOString(),
                    client: eventClientName,
                    color: eventColor
                }));
            }
        }
        else
        {
           /*  if(eventTitle === "" || eventClientName === "" || evenMemberName === "")
                setShowError(true)
            else {

            }*/
        }
    }
    
    function OnFilterChanged (filterText: string) {
        return filterText
          ? clientsList
              .filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)          
          : [];
      }
    
    
    function OnFormatDate (date): string {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
      }
}





//ms-Callout-main
export default EventForm;