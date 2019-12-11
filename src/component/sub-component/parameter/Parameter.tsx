import React, { useState } from 'react';
import styles from '../../../utils/styles.module.scss';
import strings from '../../../utils/resources';
import { staffGroup } from '../../../model/staffGroup';
import { ITag } from 'office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker.types';
import ParameterCategories from './ParameterCategories';
import ParameterMembers from './ParameterMembers';
import { PanelType } from 'office-ui-fabric-react/lib/components/Panel/Panel.types';
import { Panel } from 'office-ui-fabric-react/lib/components/Panel/Panel';

const Parameter = (props : { staffingGroup: staffGroup, 
                             clientList: Array<ITag> } ) => {

    const [showPanel, setShowPanel] = useState(false);  
    const [showCategoryEditForm, setShowCategoryEditForm] = useState(false);  
    const [showMemberEditForm, setShowMemberEditForm] = useState(false);  
                           
    return(
        <div className = {styles.parameterView}>
            <div className={styles.parameterViewRow}>
                <div className={styles.parameterViewRowTitle}>
                    <span>
                        {strings.staffHubParametersClients}
                    </span>
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
                onDismiss={() => { setShowPanel(false); setShowMemberEditForm(false); setShowCategoryEditForm(false) }}
                isLightDismiss={true}
                type={PanelType.custom}
                customWidth="500px"
                styles={ { headerText:{ fontWeight:700, fontSize:18  } } }
                headerText={strings.staffHubNewFormTitle}>
                    <div>{"heol"}</div>
            </Panel>
        </div>)

    function OpenCategoryEditForm(_categoryId) {
        setShowPanel(true);
        setShowCategoryEditForm(true);
        alert(_categoryId);
    }

    function OpenMemberEditForm(_memberId) {
        setShowPanel(true);
        setShowMemberEditForm(true);
        alert(_memberId);
    }
}
export default Parameter;