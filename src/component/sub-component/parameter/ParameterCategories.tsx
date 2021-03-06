import React, { useState, useEffect } from 'react';
import strings from '../../../utils/resources';
import { DetailsList } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList';
import { IColumn, CheckboxVisibility, DetailsListLayoutMode, IDetailsRowProps, DetailsRow, IDropdownOption } from 'office-ui-fabric-react';

const ParameterCategories = (props : { categoryList: IDropdownOption[], UpdateCategory:((e) => void) } ) => {  
    const [allCategories, setAllCategories] = useState(GetAllCategoriesFromList(props.categoryList));
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
                items = {GetAllCategoriesFromList(props.categoryList)}
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

    function GetAllCategoriesFromList(_categoryList) {
        let items = _categoryList.map((category) => {
            return { ID: category.key, Titre : category.text, color : category.color }
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
        const newItems = _copyAndSort(allCategories, currColumn.fieldName!, currColumn.isSortedDescending);
        setAllCategories(newItems);
        setColumns(newColumns);
      }

      function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
      }
}

export default ParameterCategories;