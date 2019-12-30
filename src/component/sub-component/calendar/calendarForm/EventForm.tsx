import React, { useState } from 'react';
import styles from '../../../../utils/styles.module.scss';
import strings from '../../../../utils/resources';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown } from 'office-ui-fabric-react/lib/components/Dropdown/Dropdown';
import { IconCalendar, IconRightArrow, IconCustomer, IconDeleteHover, IconDelete } from '../../../../utils/constants';
import { TagPicker } from 'office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker';
import { MessageBar } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar';
import { MessageBarType } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar.types';
import { ITag } from 'office-ui-fabric-react';
import { PrimaryButton, Input } from 'msteams-ui-components-react';
import { shift } from '../../../../model/shift';
import { category } from '../../../../model/category';

const EventForm = (props) => {

    const [eventTitle, setEventTitle] = useState(props.eventToUpdate ? props.eventToUpdate.title : "");
    const [evenMemberMail, setEvenMemberMail] = useState("");
    const [eventStartDate, setEventStartDate] = useState(props.eventToUpdate ? new Date(props.eventToUpdate.startDate) : props.selectedDate);
    const [eventEndDate, setEventEndDate] = useState(props.eventToUpdate ? new Date(props.eventToUpdate.endDate) : props.selectedDate);
    const [eventCategory, setEventCategory] = useState(props.eventToUpdate ? props.eventToUpdate.category : "");
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //TODO à garder pour plus tard
    /*
                <div className={styles.row + " " + styles.newEventClient}>
                    <span className={styles.newEventTitle}>{strings.staffHubNewFormColor}</span>
                    <SwatchColorPicker onColorChanged={(prop) => { colorCellsStaffHub.some(u => u.id === prop) ? setEventColor(colorCellsStaffHub.find(u => u.id === prop)!.color) : setEventColor(colorCellsStaffHub[0].color) }} 
                                        columnCount={5} 
                                        cellShape={'circle'} 
                                        colorCells={colorCellsStaffHub} 
                                        selectedId={props.eventToUpdate ? colorCellsStaffHub.find(u => u.color === props.eventToUpdate.category.color)!.id : colorCellsStaffHub[0].id} />
                </div>  
                */
 
    return(
        <div className={styles.addNewEventModal}>
            {
                showError &&
                <MessageBar messageBarType={MessageBarType.error} isMultiline={true} onDismiss={() => setShowError(false)} dismissButtonAriaLabel="Close">{errorMessage}</MessageBar>
            }
                <div className={styles.row + " " + styles.newEventTitleEvent}>
                    <div className={styles.newEventTitleInput}>
                        <Input
                            autoFocus
                            className={styles.newEventTitleEvent}
                            placeholder={strings.staffHubNewFormInputTitle}
                            errorLabel={eventTitle === "" ? " " : ""}
                            value={eventTitle}   
                            onChange={(event) => setEventTitle(event.target.value)}
                            required />
                    </div>

                </div>
                {
                    !props.eventToUpdate && props.listMembers.length > 0 &&
                    <div className={styles.row}>
                        <span className={styles.newEventTitle}>{strings.staffHubNewFormDdlMembers}<span className={styles.required}>*</span></span>
                        <Dropdown onChange={(event, option) => setEvenMemberMail(option!.key.toString())} options={props.listMembers.map((u) => { return {key: u.email, text: u.memberName} })} style={{ width:200 }}/>
                    </div>
                }
                <div className={styles.row + " " + styles.newEventStartDate}>
                    <div className={styles.dateFieldContainer}>
                        <div className={styles.iconSvg}>
                            <IconCalendar />                            
                        </div>
                        <div className={styles.dateTimePicker} >
                        <DatePicker placeholder={strings.staffHubNewFormStartDatePickerTitle} 
                                    formatDate={(date) => OnFormatDate(date)}
                                    value={eventStartDate}
                                    onSelectDate={(date) => { setEventStartDate(date) }}
                                    ariaLabel={strings.staffHubNewFormStartDatePickerTitle} />
                        </div>
                        <div className={styles.iconSvg}>
                            <IconRightArrow />
                        </div>
                        <div className={styles.dateTimePicker} >
                        <DatePicker placeholder={strings.staffHubNewFormEndDatePickerTitle} 
                                    formatDate={(date) => OnFormatDate(date)}
                                    value={eventEndDate}
                                    onSelectDate={(date) => { setEventEndDate(date) }}
                                    ariaLabel={strings.staffHubNewFormEndDatePickerTitle} />
                        </div>
                    </div>
                </div>   
                <div className={styles.row}>
                    <div className={styles.iconSvg}>
                        <IconCustomer />
                    </div>
                    <div>
                        <TagPicker
                            onResolveSuggestions={OnFilterChanged}                    
                            pickerSuggestionsProps={{
                                suggestionsHeaderText: strings.staffHubNewFormCategoryPicker,
                                noResultsFoundText: strings.staffHubNewFormCategoryPickerNotFound
                            }}
                            itemLimit={1}
                            defaultSelectedItems={props.categoryList.filter(u => u.name === eventCategory) }
                            onChange={(item: ITag[] | undefined) => { 
                                if(item!.length > 0) { 
                                    setEventCategory(new category(item![0].name, item![0].key, item![0]["color"]))
                                } else { setEventCategory(null) } }}
                            styles={ { root: { width: 250 } } }
                            />
                        </div>
                </div>               
                <div className={styles.row + " " + styles.newEventButton}>
                    {
                        props.eventToUpdate &&
                        <div className={styles.newEventDeleteButton} onClick={() => props.deleteEvent(props.eventToUpdate.id, props.userEmail)}>
                            <div className={styles.iconDelete}>
                                <IconDelete />
    
                            </div>
                            <div className={styles.iconDeleteHover}>
                                <IconDeleteHover />
                            </div>
                        </div>
                    }
                    <div className={styles.newEventSaveButton}>
                        <PrimaryButton onClick={() => SaveEvent(props.eventToUpdate)}>{props.eventToUpdate ? strings.staffHubNewFormBtnEdit : strings.staffHubNewFormBtnSave}</PrimaryButton>
                    </div>  
                </div>     
        </div>
    )

    function SaveEvent(_eventToModify) { 
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        if(IsValidForm(_eventToModify)) {
            //We update current event
            if(_eventToModify) {
                props.updateEvent(_eventToModify.id, props.userEmail, new shift({
                    title : eventTitle,
                    startDate: (new Date(eventStartDate - tzoffset)).toISOString().slice(0, -1),
                    endDate: (new Date(eventEndDate - tzoffset)).toISOString().slice(0, -1),
                    category: eventCategory
                }))
            }
            //We create a new event
            else {
                props.addNewItem(props.userEmail.length > 0 ? props.userEmail : evenMemberMail, new shift({
                    title : eventTitle,
                    startDate: (new Date(eventStartDate - tzoffset)).toISOString().slice(0, -1),
                    endDate: (new Date(eventEndDate - tzoffset)).toISOString().slice(0, -1),
                    category: eventCategory
                }));
            }            
        }
    }

    function IsValidForm(_eventToModify) {
        let result = true;

        if(eventStartDate.setHours(0,0,0,0) > eventEndDate.setHours(0,0,0,0)) {
            setErrorMessage(strings.staffHubNewFormSaveWarningErrorDate);
            result = false;
        }   
        if(eventTitle === "" || eventCategory === null || eventCategory === "") {
            setErrorMessage(strings.staffHubNewFormSaveWarningMissingProps)
            result = false;
        }

        if(!_eventToModify && typeof(_eventToModify) != 'undefined') {
            if(eventTitle === "" || eventCategory === null || evenMemberMail === "" ) {
                setErrorMessage(strings.staffHubNewFormSaveWarningMissingProps)
                result = false;
            }
        }
        setShowError(!result);
        return result;
    }

    function OnFilterChanged (filterText: string) {
        return filterText
          ? props.categoryList
              .filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)          
          : [];
      }
    
    
    function OnFormatDate (date): string {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
      }
}





//ms-Callout-main
export default EventForm;