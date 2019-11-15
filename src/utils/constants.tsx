import * as React from 'react';
import { IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown/Dropdown.types';
import { ITag } from 'office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker.types';

export const currentLang = "fr-FR";
export const fixWidth = 100;
export const fixWidthforBigEvent = 100.8;
export const timelineGridTopShift = 22;



export const colorCellsStaffHub = [
    { id: 'infeenyColor', label: 'Infeeny', color: '#240058' },
    { id: 'bleuColor', label: 'Bleu', color: '#017CE6' },
    { id: 'vertColor', label: 'Vert', color: '#8EBB0E' },
    { id: 'violetColor', label: 'Violet', color: '#8D7EF3' },
    { id: 'roseColor', label: 'Rose', color: '#E15E6F' },
    { id: 'jauneColor', label: 'Jaune', color: '#FFBA00' },
    { id: 'grisColor', label: 'Gris', color: '#454644' },
    { id: 'bleuFonceColor', label: 'Bleu foncé', color: '#005295' },
    { id: 'vertFonceColor', label: 'Vert foncé', color: '#4D8602' },
    { id: 'violetFonceColor', label: 'Violet foncé', color: '#562888' },
    { id: 'roseFonceColor', label: 'Rose foncé', color: '#A4202B' },
    { id: 'jauneFonceColor', label: 'Jaune foncé', color: '#FFA230' }    
  ];

export const clientsList: ITag[] = [
    'Michelin',
    'GEM',
    'Grand Lyon',
    'Toray',
    'Sicam'
  ].map(item => ({ key: item, name: item }));

export const calendarHours: IDropdownOption[] = [
    { key: '06_00', text: '06 00' },
    { key: '06_30', text: '06 30' },
    { key: '07_00', text: '07 00' },
    { key: '07_30', text: '07 30' },
    { key: '08_00', text: '08 00' },
    { key: '08_30', text: '08 30' },
    { key: '09_00', text: '09 00' },
    { key: '09_30', text: '09 30' },
    { key: '10_00', text: '10 00' },
    { key: '10_30', text: '10 30' },
    { key: '11_00', text: '11 00' },
    { key: '11_30', text: '11 30' },
    { key: '12_00', text: '12 00' },
    { key: '12_30', text: '12 30' },
    { key: '13_00', text: '13 00' },
    { key: '13_30', text: '13 30' },
    { key: '14_00', text: '14 00' },
    { key: '14_30', text: '14 30' },
    { key: '15_00', text: '15 00' },
    { key: '15_30', text: '15 30' },
    { key: '16_00', text: '16 00' },
    { key: '16_30', text: '16 30' },
    { key: '17_00', text: '17 00' },
    { key: '17_30', text: '17 30' },
    { key: '18_00', text: '18 00' },
    { key: '18_30', text: '18 30' },
    { key: '19_00', text: '19 00' },
    { key: '19_30', text: '19 30' },
    { key: '20_00', text: '20 00' },
    { key: '20_30', text: '20 30' },
    { key: '21_00', text: '21 00' },
    { key: '21_30', text: '21 30' },
    { key: '22_00', text: '22 00' },
    { key: '22_30', text: '22 30' }
  ];

export function IconLeftChevron(){
    return(<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15pt" viewBox="0 0 256 256">
                <polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"/>
            </svg>);
}

export function IconLeftChevronHover(){
    return(<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15pt" viewBox="0 0 256 256">
                <polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"/>
            </svg>);
}

export function IconRightChevron(){
    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15pt" viewBox="0 0 256 256">
                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		"/>
        </svg>
    )
}

export function IconRightChevronHover(){
    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15pt" viewBox="0 0 256 256">
                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		"/>
        </svg>
    )
}