import * as React from 'react';
import styles from '../../utils/styles.module.scss';
import strings from '../../utils/resources';
import { IconRightChevron, IconLeftChevron } from '../../utils/constants';
import moment from 'moment';

const CalendarHeaderTimeline = (props : { getCalendarCurrentDate: ((_date:string) => void), resetCalendarCurrentDate: (() => void), calendarMonthName: string, calendarYearName: string } ) => {

    function NextMonth(){        
        let date = moment()
            .month(props.calendarMonthName)
            .year(parseInt(props.calendarYearName))
            .add(1, 'month').format("MM MMMM YYYY").split(" ");
            props.getCalendarCurrentDate(date[0] + " " + date[1] + " " + date[2])
    }

    function PreviousMonth(){
        let date = moment()
            .month(props.calendarMonthName)
            .year(parseInt(props.calendarYearName))
            .add(-1, 'month').format("MM MMMM YYYY").split(" ");
            props.getCalendarCurrentDate(date[0] + " " + date[1] + " " + date[2])
    }

    return(
        <div className={styles.calendarHeaderTimeline + " " + styles.noselect}>
                <div onClick={props.resetCalendarCurrentDate } className={styles.today}>{strings.staffHubToday}</div>
                <div onClick={PreviousMonth} className={styles.icon}>
                    <IconLeftChevron />
                </div>
                <div onClick={NextMonth} className={styles.icon}>
                    <IconRightChevron />
                </div>
                <div className={styles.monthDate}>{props.calendarMonthName + " " + props.calendarYearName}</div>
                <div className={styles.daySelector}>
                    <span>{strings.staffHubDays}</span>
                    <span>{strings.staffHubWeeks}</span>
                    <span className={styles.visited}>{strings.staffHubMonth}</span>
                </div>
        </div>
    );

}

export default CalendarHeaderTimeline;