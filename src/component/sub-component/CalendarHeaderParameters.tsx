import * as React from 'react';
import styles from '../../utils/styles.module.scss';
import strings from '../../utils/resources';

const CalendarHeaderParameters = () => {
    return(
        <div className={styles.calendarHeaderParametersContainer + " " + styles.noselect}>
            <div className={styles.title}>{strings.staffHubInfeenyTitle}</div>
            <div className={styles.btnContainerParameters}>
                <div className={styles.btnParameters + " " + styles.btnVisited}>{strings.staffHubPlanner}</div>
                <div className={styles.btnParameters}>{strings.staffHubParameter}</div>
            </div>
        </div>
    )
}

export default CalendarHeaderParameters;