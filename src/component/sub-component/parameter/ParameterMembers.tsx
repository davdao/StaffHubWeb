import React, { useState } from 'react';
import strings from '../../../utils/resources';
import { DetailsList } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList';
import { IColumn, CheckboxVisibility, DetailsListLayoutMode, IDetailsRowProps, DetailsRow } from 'office-ui-fabric-react';
import { memberShift } from '../../../model/memberShift';

const ParameterMembers =  (props : { members: memberShift[], UpdateMember:((e) => void) } ) => {
    const [allMembers, setAllMembers] = useState(GetAllMembersFromList(props.members));
    const columnArray : IColumn[] = [
                                    {
                                    key: 'title',
                                    name: strings.staffHubParametersName,
                                    fieldName: 'name',
                                    minWidth: 50,
                                    maxWidth: 150,
                                    onColumnClick: _onColumnClick
                                    },
                                    {
                                    key: 'email',
                                    name: strings.staffHubParametersEmail,
                                    fieldName: 'email',
                                    minWidth: 50,
                                    maxWidth: 100,
                                    onColumnClick: _onColumnClick,
                                    data: 'string'
                                    }]
    const [columns, setColumns]  = useState(columnArray);
    return(            
        <DetailsList
            items = {allMembers}
            columns = {columns}
            onRenderRow = {_renderRow}
            checkboxVisibility = { CheckboxVisibility.hidden }
            layoutMode={DetailsListLayoutMode.justified}
            compact={true}
        />
        )

    function _renderRow(itemProps?: IDetailsRowProps){
        if (!itemProps) return null
        
        return (
            <div onClick={() => props.UpdateMember(itemProps.item.ID)}><DetailsRow {...itemProps} /></div>
        );
        }
        
    function GetAllMembersFromList(_members : memberShift[]) {
        let items = _members.map((member) => {
            return { ID: member.id, name : member.name, email : member.email  }
        });
        return items;
    }
        
    function _onColumnClick(ev: React.MouseEvent<HTMLElement>, column: IColumn) {
        const newColumns: IColumn[] = columns.slice();
        const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
          if (newCol === currColumn) {
            currColumn.isSortedDescending = !currColumn.isSortedDescending;
            currColumn.isSorted = true;
          } else {
            newCol.isSorted = false;
            newCol.isSortedDescending = true;
          }
        });
        const newItems = _copyAndSort(allMembers, currColumn.fieldName!, currColumn.isSortedDescending);
        setAllMembers(newItems);
        setColumns(newColumns);
      }

      function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
      }
}

export default ParameterMembers;