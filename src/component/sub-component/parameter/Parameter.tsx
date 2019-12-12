import React, { useState } from 'react';
import styles from '../../../utils/styles.module.scss';
import strings from '../../../utils/resources';
import { staffGroup } from '../../../model/staffGroup';
import { ITag } from 'office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker.types';
import ParameterCategories from './ParameterCategories';
import ParameterMembers from './ParameterMembers';
import { PanelType } from 'office-ui-fabric-react/lib/components/Panel/Panel.types';
import { Panel } from 'office-ui-fabric-react/lib/components/Panel/Panel';
import ParameterEditFormCategories from './ParameterEditFormCategories';
import ParameterEditFormMember from './ParameterEditFormMember';
import clientBusiness from '../../../business/clientBusiness';

const Parameter = (props : { staffingGroup: staffGroup, 
                             clientList: Array<ITag> } ) => {

    const [showPanel, setShowPanel] = useState(false);  
    const [showCategoryEditForm, setShowCategoryEditForm] = useState(false); 
    const [categoryToUpdate, setCategoryToUpdate] = useState(); 
    const [memberToUpdate, setMemberToUpdate] = useState(); 
                           
    return(
        <div className = {styles.parameterView}>
            <div className={styles.parameterViewRow}>
                <div className={styles.parameterViewRowTitle}>
                    <span>
                        {strings.staffHubParametersClients}
                    </span>
                    <div>
                        <a href="#" onClick={() => OpenCategoryEditForm()} >{"Ajouter catégorie"}</a>
                    </div>
                </div>
                <div className={styles.parameterViewRowContent}>
                    <ParameterCategories clientList={props.clientList} UpdateCategory={OpenCategoryEditForm} />
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
            return strings.staffHubParametersEditFormTitle.replace('{0}', categoryToUpdate ? categoryToUpdate.name : (memberToUpdate ? memberToUpdate.name : ''));
        }        
    }

    function OpenCategoryEditForm(_categoryId?) {

        setShowPanel(true);
        setShowCategoryEditForm(true);
        setMemberToUpdate(null);

        if(props.clientList.some(i => i.key === _categoryId))
            setCategoryToUpdate(props.clientList.filter(i => i.key === _categoryId)[0]);
            
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

        clientBusiness.UpdateCategory({id: categoryToUpdate.key, name: newTitle, color: newCategoryColor})
    }

    function DeletCategory() {
        setShowPanel(false);
    }
    function AddCategory(newTitle: string, newCategoryColor: string) {
        setShowPanel(false);
        clientBusiness.AddCategory({name: newTitle, color: newCategoryColor})
    }
}
export default Parameter;