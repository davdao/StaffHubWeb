import * as React from 'react';
import { IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown/Dropdown.types';

export const currentLang = "fr-FR";
export const fixWidth = 100;
export const fixWidthforBigEvent = 100.8;
export const timelineGridTopShift = 22;

const BASE_URL = "https://localhost:44355/api";

export const Config = {
    ApiUrl: {
        Activity: {
            GetById : BASE_URL + '/activity?Id={0}',
            Update : BASE_URL + '/activity',
            Delete : BASE_URL + '/activity',
            Insert : BASE_URL + '/activity'
        },
        Member: {
            GetAll : BASE_URL + '/member',
        },
        Shift : {
            GetAll : BASE_URL + '/shift',
        },
        Client :{
            GetAll : BASE_URL + '/client',
        }
    }
}

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

export function IconRightChevron(){
    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15pt" viewBox="0 0 256 256">
                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128"/>
        </svg>
    )
}

export function IconDelte() {
    return(
        <svg viewBox="-40 0 427 427.00131" xmlns="http://www.w3.org/2000/svg">
            <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/>
            <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
        </svg>
    )
}

export function IconDeleteHover() {
    return(
        <svg viewBox="-48 0 407 407" xmlns="http://www.w3.org/2000/svg">
            <path d="m89.199219 37c0-12.132812 9.46875-21 21.601562-21h88.800781c12.128907 0 21.597657 8.867188 21.597657 21v23h16v-23c0-20.953125-16.644531-37-37.597657-37h-88.800781c-20.953125 0-37.601562 16.046875-37.601562 37v23h16zm0 0"/><path d="m60.601562 407h189.199219c18.242188 0 32.398438-16.046875 32.398438-36v-247h-254v247c0 19.953125 14.15625 36 32.402343 36zm145.597657-244.800781c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0 0"/>
            <path d="m20 108h270.398438c11.046874 0 20-8.953125 20-20s-8.953126-20-20-20h-270.398438c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm0 0"/>
        </svg>
    )
}