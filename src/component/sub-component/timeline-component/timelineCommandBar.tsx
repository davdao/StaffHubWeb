import React from 'react';
import styles from '../../../utils/styles.module.scss';
import { CommandBar } from 'office-ui-fabric-react/lib/components/CommandBar/CommandBar';
import { ICommandBarItemProps } from 'office-ui-fabric-react/lib/components/CommandBar/CommandBar.types';
  
const TimelineCommandBar = (props) => {

    const _itemsCommandBar: ICommandBarItemProps[] = [
        {
          key: 'newItem',
          text: 'New',
          cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
          iconProps: { iconName: 'Add' },
          subMenuProps: {
            items: [
              {
                key: 'newMember',
                text: 'Nouveau membre',
                iconProps: { iconName: 'PeopleAdd' },
                onClick: () => alert("A implémenter")
              },
              {
                key: 'newEvent',
                text: 'Nouvel évènement',
                iconProps: { iconName: 'Calendar' },
                onClick: () => props.OnOpenNewForm()
              }
            ]
          }
        },
        {
          key: 'share',
          text: 'Share',
          iconProps: { iconName: 'Share' },
          onClick: () => alert("ahah c'est du fake")
        },
        {
          key: 'download',
          text: 'Download',
          iconProps: { iconName: 'Download' },
          onClick: () => alert("ahah c'est du fake")
        }
      ];
    return(
        <div className={styles.timelineCommandBar}>
            <CommandBar 
                items={_itemsCommandBar}/>
        </div>);
}


export default TimelineCommandBar;