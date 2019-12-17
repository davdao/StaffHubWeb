import * as React from 'react';
import styles from '../../../utils/styles.module.scss';
import strings from '../../../utils/resources';

const CalendarHeaderParameters = (props : { planningSelected : boolean,
                                            OnClickedHeaderBtn:((e) => void) }) => {
    return(
        <div className={styles.calendarHeaderParametersContainer + " " + styles.noselect}>
            <div className={styles.title}>{strings.staffHubInfeenyTitle}</div>
            <div className={styles.btnContainerParameters}>
                <div onClick={() => props.OnClickedHeaderBtn(true)} className={styles.btnParameters + " " + (props.planningSelected ? styles.btnVisited : "")}>{strings.staffHubPlanner}</div>
                <div onClick={() => props.OnClickedHeaderBtn(false)} className={styles.btnParameters + " " + (!props.planningSelected ? styles.btnVisited : "")}>{strings.staffHubParameter}</div>
            </div>
        </div>
    )
}
export default CalendarHeaderParameters;