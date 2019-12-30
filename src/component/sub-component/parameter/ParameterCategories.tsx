import React, { useState } from 'react';
import strings from '../../../utils/resources';
import { ITag } from 'office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker.types';
import { DetailsList } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList';
import { IColumn, CheckboxVisibility, DetailsListLayoutMode, IDetailsRowProps, DetailsRow } from 'office-ui-fabric-react';

const ParameterCategories = (props : { categoryList: Array<ITag>, UpdateCategory:((e) => void) } ) => {  
    const [allClients, setAllClients] = useState(GetAllClientsFromList(props.categoryList));
    const columnArray : IColumn[] = [
                                        {
                                        key: 'title',
                                        name: strings.staffHubParametersTitle,
                                        fieldName: 'Titre',
                                        minWidth: 50,
                                        maxWidth: 150,
                                        onColumnClick: _onColumnClick
                                        },
                                        {
                                        key: 'color',
                                        name: strings.staffHubParametersColor,
                                        fieldName: 'color',
                                        minWidth: 50,
                                        maxWidth: 50,
                                        onColumnClick: _onColumnClick,
                                        data: 'string'
                                        }]
    const [columns, setColumns]  = useState(columnArray);

    return(
            <DetailsList
                items = {allClients}
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
        <div onClick={() => props.UpdateCategory(itemProps.item.ID)}><DetailsRow {...itemProps} /></div>
      );
    }

    function GetAllClientsFromList(_clientList) {
        let items = _clientList.map((client) => {
            return { ID: client.key, Titre : client.name, color : client.color }
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
        const newItems = _copyAndSort(allClients, currColumn.fieldName!, currColumn.isSortedDescending);
        setAllClients(newItems);
        setColumns(newColumns);
      }

      function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
      }
}

export default ParameterCategories;