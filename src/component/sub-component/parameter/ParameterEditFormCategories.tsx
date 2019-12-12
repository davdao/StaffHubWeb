import React, { useState } from 'react';
import styles from '../../../utils/styles.module.scss';
import strings from '../../../utils/resources';
import { Input } from 'msteams-ui-components-react/lib/input';
import { Dropdown } from 'office-ui-fabric-react/lib/components/Dropdown/Dropdown';
import { colorCellsStaffHub } from '../../../utils/constants';
import { IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown/Dropdown.types';
import { PrimaryButton } from 'msteams-ui-components-react/lib/buttons/primary';
import { MessageBar } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar';
import { MessageBarType } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar.types';

const ParameterEditFormCategories = (props : {  categoryToUpdate: any,
                                                updateCategory:((e, u) => void),
                                                deleteCategory:(() => void),
                                                addCategory:((e, u) => void) }) => {
    const [categoryTitle, setCategoryTitle] = useState(props.categoryToUpdate ? props.categoryToUpdate.name : "");
    const [categoryColor, setCategoryColor] = useState(props.categoryToUpdate ? colorCellsStaffHub.filter(u => u.color === props.categoryToUpdate.color)[0].id : "");
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    return(
    <div className={styles.updateCategoryMemberForm}>
        {
            showError &&
            <div className={styles.updateCategoryMemberFormRow}>
                <MessageBar messageBarType={MessageBarType.error} isMultiline={true} onDismiss={() => setShowError(false)} dismissButtonAriaLabel="Close">{errorMessage}</MessageBar>
            </div>
        }        
        <div className={styles.updateCategoryMemberFormRow}>
        <Input
            autoFocus
            className={styles.newCategoryTitleEvent}
            placeholder={strings.staffHubNewFormInputTitle}
            errorLabel={categoryTitle === "" ? " " : ""}
            value={categoryTitle}   
            onChange={(event) => setCategoryTitle(event.target.value)}
            required />
        </div>
        <div className={styles.updateCategoryMemberFormRow}>
            <div>
                <Dropdown options={colorCellsStaffHub.map((u) => { return {key: u.id, text: u.color} })}
                          onChange={(event, option) => setCategoryColor(option!.key.toString())} 
                          onRenderOption={_onRenderOption}
                          onRenderTitle={_onRenderTitle}
                          selectedKey={categoryColor}
                          style={{ width:150 }} />
            </div>
        </div>
        <div className={styles.updateCategoryMemberSaveButton}>
                <PrimaryButton onClick={() => _saveCategory()} >{strings.staffHubParametersBtnSave}</PrimaryButton>
        </div>  
    </div>)
    
    function _saveCategory() {
        if(IsValidForm(categoryTitle, categoryColor)) {
            if(!props.categoryToUpdate) {
                props.addCategory(categoryTitle, colorCellsStaffHub.filter(u => u.id === categoryColor)[0].color);
            }
            else
                props.updateCategory(categoryTitle, colorCellsStaffHub.filter(u => u.id === categoryColor)[0].color);
        }        
    }

    function _onRenderTitle(options?: IDropdownOption[]) {
        if(!options || options.length === 0)
            return null;

        return(<div className={styles.dropdownoption}>
                    <div className={styles.optionColor} style={{ backgroundColor: options[0].text }} />{options[0].text}
                </div>)
    }

    function _onRenderOption(option?: IDropdownOption) {
        if(!option)
            return null;

        return (
            <div className={styles.dropdownoption}>
                <div className={styles.optionColor} style={{ backgroundColor: option.text }} />
                {option.text}
            </div>
        );
    }

    function IsValidForm(_categoryTitle, _categoryColor) {
        let result = true;

        if(_categoryTitle === "" || _categoryColor === "" ) {
            setErrorMessage(strings.staffHubNewFormSaveWarningMissingProps)
            result = false;
        }
        setShowError(!result);
        return result;
    }
}

export default ParameterEditFormCategories;