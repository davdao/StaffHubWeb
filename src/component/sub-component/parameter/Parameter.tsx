import React, { useState } from 'react';
import styles from '../../../utils/styles.module.scss';
import strings from '../../../utils/resources';
import { staffGroup } from '../../../model/staffGroup';
import ParameterCategories from './ParameterCategories';
import ParameterMembers from './ParameterMembers';
import { PanelType } from 'office-ui-fabric-react/lib/components/Panel/Panel.types';
import { Panel } from 'office-ui-fabric-react/lib/components/Panel/Panel';
import ParameterEditFormCategories from './ParameterEditFormCategories';
import ParameterEditFormMember from './ParameterEditFormMember';
import categoryBusiness from '../../../business/categoryBusiness';
import { IDropdownOption, DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

const Parameter = (props : { staffingGroup: staffGroup, 
                            categoryList: Array<IDropdownOption>,
                            refreshCategoryList: () => void,
                            removeCategoryItem: (e) => void; } ) => {
                               
    const [showPanel, setShowPanel] = useState(false);  
    const [showCategoryEditForm, setShowCategoryEditForm] = useState(false); 
    const [categoryToUpdate, setCategoryToUpdate] = useState(); 
    const [memberToUpdate, setMemberToUpdate] = useState(); 
    const [showConfirmDelete, setShowConfirmDelete] = useState(true); 
              
    return(
        <div className = {styles.parameterView}>
            <Dialog
                hidden={showConfirmDelete}                
                onDismiss={() => setShowConfirmDelete(true)}
                dialogContentProps={{
                    type: DialogType.normal,                    
                    title: strings.staffHubParametersDeleteCategory.replace('{0}', categoryToUpdate ? categoryToUpdate.text : ""),
                    closeButtonAriaLabel: 'Close',
                    subText: strings.staffHubParametersDeleteCategoryMsg
                }}
                modalProps={{                  
                    isBlocking: false,
                    styles: { main: { maxWidth: 450 } },
                    
                }}
                >
                <DialogFooter>
                    <PrimaryButton text={strings.staffHubParametersDeleteCategoryDelete} onClick={() => {
                        categoryBusiness.DeleteCategory(categoryToUpdate).then(() => {
                            props.removeCategoryItem(categoryToUpdate); setShowConfirmDelete(true);
                        })
                        }} />
                    <DefaultButton text={strings.staffHubParametersDeleteCategoryNo} onClick={() => setShowConfirmDelete(true)} />
                </DialogFooter>
                </Dialog>
            <div className={styles.parameterViewRow}>
                <div className={styles.parameterViewRowTitle}>
                    <span>
                        {strings.staffHubParametersCategory}
                    </span>
                    <div>
                        <a href="#" onClick={() => OpenCategoryEditForm()} >{"Ajouter catégorie"}</a>
                    </div>
                </div>
                <div className={styles.parameterViewRowContent}>
                {
                   <ParameterCategories categoryList={props.categoryList} UpdateCategory={OpenCategoryEditForm} />
                }  
                </div>
            </div>
            <div className={styles.parameterViewRow}>
                <div className={styles.parameterViewRowTitle}>
                    <span>
                        {strings.staffHubParametersMembers}
                    </span>
                </div>
                <div className={styles.parameterViewRowContent}>
                    <ParameterMembers members={props.staffingGroup.members} UpdateMember={OpenMemberEditForm} />
                </div>
            </div>
            <Panel
                closeButtonAriaLabel="Close"
                isOpen={showPanel}
                onDismiss={() => { setShowPanel(false); setShowCategoryEditForm(false) }}
                isLightDismiss={true}
                type={PanelType.custom}
                customWidth="500px"
                styles={ { headerText:{ fontWeight:700, fontSize:18  } } }
                headerText={GetFormTitle()}>
                    {
                        showCategoryEditForm ?
                            <ParameterEditFormCategories categoryToUpdate={categoryToUpdate} 
                                                         updateCategory={UpdateCategory}
                                                         deleteCategory={DeletCategory}
                                                         addCategory={AddCategory}/>
                        :
                            <ParameterEditFormMember />
                    }
            </Panel>
        </div>)

    function GetFormTitle(){
        if(categoryToUpdate === null) {
            return strings.staffHubParametersAddFormTitle;
        }
        else {
            return strings.staffHubParametersEditFormTitle.replace('{0}', categoryToUpdate ? categoryToUpdate.text : (memberToUpdate ? memberToUpdate.text : ''));
        }        
    }

    function OpenCategoryEditForm(_categoryId?) {

        setShowPanel(true);
        setShowCategoryEditForm(true);
        setMemberToUpdate(null);

        if(props.categoryList.some(i => i.key === _categoryId))
            setCategoryToUpdate(props.categoryList.filter(i => i.key === _categoryId)[0]);
            
        if(!_categoryId)
            setCategoryToUpdate(null);
    }

    function OpenMemberEditForm(_memberId) {
        setShowPanel(true);
        setCategoryToUpdate(null);

        if(props.staffingGroup.members.some(i => i.id === _memberId))
            setMemberToUpdate(props.staffingGroup.members.filter(i => i.id === _memberId)[0]);        
    }

    function UpdateCategory(newTitle: string, newCategoryColor: string) {
        setShowPanel(false);
        categoryBusiness.UpdateCategory({id: categoryToUpdate.key, name: newTitle, color: newCategoryColor}).then(props.refreshCategoryList)
    }

    function DeletCategory(_category) {
        setShowPanel(false);
        setShowConfirmDelete(false)       
    }
    
    function AddCategory(newTitle: string, newCategoryColor: string) {
        setShowPanel(false);
        categoryBusiness.AddCategory({name: newTitle, color: newCategoryColor}).then(props.refreshCategoryList);
    }
}
export default Parameter;