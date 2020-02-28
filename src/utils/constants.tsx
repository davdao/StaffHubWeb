import * as React from 'react';

export const currentLang = "fr-FR";
export const fixWidth = 98;
export const fixWidth4_12Event = 101.5;
export const fixWidth12_16Event = 101.9;
export const fixWidth16_24Event = 102;
export const fixWidth24_28Event = 102.2;
export const timelineGridTopShift = 22;

//const BASE_URL = "https://staffhub-api.azurewebsites.net/api";
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

            Event : {
                Add : BASE_URL + '/member/event/add?memberEmail={0}&activityId={1}',
                Update : BASE_URL + '/member/event/update',
                Delete : BASE_URL + '/member/event/delete',
            }
        },
        Category :{
            GetAll : BASE_URL + '/category',
            Add : BASE_URL + '/category/add',
            Update : BASE_URL + '/category',
            Delete : BASE_URL + '/category'
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

export function IconLeftChevron(){
    return(<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15pt" viewBox="0 0 256 256">
                <polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"/>
            </svg>);
}

export function IconDelete() {
    return(
        <svg id="Delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.213 224.656">
            <path id="Tracé_3021" data-name="Tracé 3021" d="M227.566,154.7a5.268,5.268,0,0,0-5.168,5.364V261.444a5.171,5.171,0,1,0,10.335,0V160.067A5.268,5.268,0,0,0,227.566,154.7Zm0,0" transform="translate(-104.43 -71.758)" fill="#4b509e"/>
            <path id="Tracé_3022" data-name="Tracé 3022" d="M109.566,154.7a5.268,5.268,0,0,0-5.168,5.364V261.444a5.171,5.171,0,1,0,10.335,0V160.067A5.268,5.268,0,0,0,109.566,154.7Zm0,0" transform="translate(-50.489 -71.758)" fill="#4b509e"/>
            <path id="Tracé_3023" data-name="Tracé 3023" d="M14.919,66.881V196.507a29.049,29.049,0,0,0,7.707,20.019A25.857,25.857,0,0,0,41.4,224.655h99.409a25.851,25.851,0,0,0,18.773-8.128,29.049,29.049,0,0,0,7.707-20.019V66.881a20.1,20.1,0,0,0-5.149-39.523h-26.9V20.781A20.652,20.652,0,0,0,114.43,0H67.776A20.652,20.652,0,0,0,46.969,20.781v6.577h-26.9a20.1,20.1,0,0,0-5.149,39.523ZM140.808,214.132H41.4c-8.983,0-15.972-7.727-15.972-17.625V67.343H156.779V196.507c0,9.9-6.988,17.625-15.972,17.625ZM57.477,20.781a10.129,10.129,0,0,1,10.3-10.259H114.43a10.129,10.129,0,0,1,10.3,10.259v6.577H57.477ZM20.069,37.88H162.138a9.47,9.47,0,0,1,0,18.94H20.069a9.47,9.47,0,0,1,0-18.94Zm0,0" transform="translate(0.003 0.002)" fill="#4b509e"/>
            <path id="Tracé_3024" data-name="Tracé 3024" d="M168.566,154.7a5.268,5.268,0,0,0-5.168,5.364V261.444a5.171,5.171,0,1,0,10.335,0V160.067A5.268,5.268,0,0,0,168.566,154.7Zm0,0" transform="translate(-77.46 -71.758)" fill="#4b509e"/>
        </svg>   
    )
}

export function IconDeleteHover() {
    return(
        <svg id="DeleteHover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388 388">
            <path id="Tracé_3026" data-name="Tracé 3026" d="M-9515.972,3869.82v147.637l17.793,7.694h113.013l8.655-19.236v-136.1Z" transform="translate(9641 -3725)" fill="#4b509e"/>
            <g id="Composant_33_2" data-name="Composant 33 – 2" transform="translate(103 82)">
                <path id="Tracé_3021" data-name="Tracé 3021" d="M227.566,154.7a5.268,5.268,0,0,0-5.168,5.364V261.444a5.171,5.171,0,1,0,10.335,0V160.067A5.268,5.268,0,0,0,227.566,154.7Zm0,0" transform="translate(-104.43 -71.758)" fill="#fff"/>
                <path id="Tracé_3022" data-name="Tracé 3022" d="M109.566,154.7a5.268,5.268,0,0,0-5.168,5.364V261.444a5.171,5.171,0,1,0,10.335,0V160.067A5.268,5.268,0,0,0,109.566,154.7Zm0,0" transform="translate(-50.489 -71.758)" fill="#fff"/>
                <path id="Tracé_3023" data-name="Tracé 3023" d="M14.919,66.881V196.507a29.049,29.049,0,0,0,7.707,20.019A25.857,25.857,0,0,0,41.4,224.655h99.409a25.851,25.851,0,0,0,18.773-8.128,29.049,29.049,0,0,0,7.707-20.019V66.881a20.1,20.1,0,0,0-5.149-39.523h-26.9V20.781A20.652,20.652,0,0,0,114.43,0H67.776A20.652,20.652,0,0,0,46.969,20.781v6.577h-26.9a20.1,20.1,0,0,0-5.149,39.523ZM140.808,214.132H41.4c-8.983,0-15.972-7.727-15.972-17.625V67.343H156.779V196.507c0,9.9-6.988,17.625-15.972,17.625ZM57.477,20.781a10.129,10.129,0,0,1,10.3-10.259H114.43a10.129,10.129,0,0,1,10.3,10.259v6.577H57.477ZM20.069,37.88H162.138a9.47,9.47,0,0,1,0,18.94H20.069a9.47,9.47,0,0,1,0-18.94Zm0,0" transform="translate(0.003 0.002)" fill="#4b509e"/>
                <path id="Tracé_3024" data-name="Tracé 3024" d="M168.566,154.7a5.268,5.268,0,0,0-5.168,5.364V261.444a5.171,5.171,0,1,0,10.335,0V160.067A5.268,5.268,0,0,0,168.566,154.7Zm0,0" transform="translate(-77.46 -71.758)" fill="#fff"/>
            </g>
            <g id="Ellipse_814" data-name="Ellipse 814" fill="none" stroke="#4b509e" strokeWidth="15">
                <circle cx="194" cy="194" r="194" stroke="none"/>
                <circle cx="194" cy="194" r="186.5" fill="none"/>
            </g>
            <path id="Tracé_3025" data-name="Tracé 3025" d="M-9525.466,3842.869l-6.658,12.948,11.1,10.358h153.888l4.439-17.756-15.166-9.618Z" transform="translate(9641 -3725)" fill="#4b509e"/>
        </svg>
    )
}

export function IconRightChevron(){
    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15pt" viewBox="0 0 256 256">
                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128"/>
        </svg>
    )
}

export function IconRightArrow() {
    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 31.49 31.49">
        <path fill="#4E586A" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
            C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
            c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
        </svg>
        )
}
export function IconCalendar() {
    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#4E586A"
            viewBox="0 0 33 33" >
                <path d="M28.5,0h-24C2.019,0,0,2.019,0,4.5v24C0,30.98,2.019,33,4.5,33h24c2.48,0,4.5-2.02,4.5-4.5v-24C33,2.019,30.98,0,28.5,0z
                    M31.5,28.5c0,1.648-1.35,3-3,3h-24c-1.65,0-3-1.352-3-3v-24c0-1.649,1.35-3,3-3h24c1.65,0,3,1.351,3,3V28.5z"/>
                <circle cx="9.25" cy="4.773" r="1.273"/>
                <circle cx="16.5" cy="4.773" r="1.273"/>
                <circle cx="23.75" cy="4.773" r="1.273"/>
                <rect x="11.134" y="12.902" width="4.596" height="4.088"/>
                <rect x="17.271" y="12.902" width="4.595" height="4.088"/>
                <rect x="23.404" y="12.902" width="4.596" height="4.088"/>
                <rect x="5" y="18.359" width="4.595" height="4.086"/>
                <rect x="11.134" y="18.359" width="4.596" height="4.086"/>
                <rect x="17.271" y="18.359" width="4.595" height="4.086"/>
                <rect x="23.404" y="18.359" width="4.596" height="4.086"/>
                <rect x="5" y="23.816" width="4.595" height="4.086"/>
                <rect x="11.134" y="23.816" width="4.596" height="4.086"/>
                <rect x="17.271" y="23.816" width="4.595" height="4.086"/>
                <rect x="23.404" y="23.816" width="4.596" height="4.086"/>
        </svg>
    )
}

export function IconLoader() {
    return(
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="23.2115" fill="none" stroke="#5f2a62" strokeWidth="1">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;41" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
            <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
            </circle>
            <circle cx="50" cy="50" r="39.9285" fill="none" stroke="#a976c3" strokeWidth="1">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;41" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
            <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
            </circle>
        </svg>
    )
}
export function IconCustomer() {
    return(
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
		 viewBox="0 0 512 512">
            <path fill="#CAD3DB" d="M353.103,220.69c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828
                s8.828,3.531,8.828,8.828v17.655C361.931,217.159,358.4,220.69,353.103,220.69"/>
            <polygon fill="#4E586A" points="256,61.793 256,0 150.069,0 150.069,61.793 114.759,61.793 114.759,300.138 185.379,300.138 
                185.379,247.172 291.31,247.172 291.31,61.793 "/>
            <g>
                <polygon fill="#CAD3DB" points="8.828,512 185.379,512 185.379,300.138 8.828,300.138 	"/>
                <polygon fill="#CAD3DB" points="185.379,512 397.241,512 397.241,247.172 185.379,247.172 	"/>
            </g>
            <g>
                <polygon fill="#4E586A" points="26.483,300.138 79.448,300.138 79.448,264.828 26.483,264.828 	"/>
                <polygon fill="#4E586A" points="114.759,512 185.379,512 185.379,335.448 114.759,335.448 	"/>
                <path fill="#4E586A" d="M220.69,494.345c-5.297,0-8.828-3.531-8.828-8.828V282.483c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v203.034C229.517,490.814,225.986,494.345,220.69,494.345"/>
                <path fill="#4E586A" d="M256,494.345c-5.297,0-8.828-3.531-8.828-8.828V282.483c0-5.297,3.531-8.828,8.828-8.828
                    c5.297,0,8.828,3.531,8.828,8.828v203.034C264.828,490.814,261.297,494.345,256,494.345"/>
                <path fill="#4E586A" d="M291.31,494.345c-5.297,0-8.828-3.531-8.828-8.828V282.483c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v203.034C300.138,490.814,296.607,494.345,291.31,494.345"/>
                <path fill="#4E586A" d="M326.621,494.345c-5.297,0-8.828-3.531-8.828-8.828V282.483c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v203.034C335.448,490.814,331.917,494.345,326.621,494.345"/>
                <path fill="#4E586A" d="M361.931,494.345c-5.297,0-8.828-3.531-8.828-8.828V282.483c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v203.034C370.759,490.814,367.228,494.345,361.931,494.345"/>
                <polygon fill="#4E586A" points="335.448,247.172 370.759,247.172 370.759,211.862 335.448,211.862 	"/>
                <polygon fill="#4E586A" points="397.241,512 503.172,512 503.172,97.103 397.241,97.103 	"/>
            </g>
            <g>
                <polygon fill="#CAD3DB" points="423.724,97.103 476.69,97.103 476.69,61.793 423.724,61.793 	"/>
                <path fill="#CAD3DB" d="M185.379,379.586h-35.31c-5.297,0-8.828-3.531-8.828-8.828s3.531-8.828,8.828-8.828h35.31
                    c5.297,0,8.828,3.531,8.828,8.828S190.676,379.586,185.379,379.586"/>
                <path fill="#CAD3DB" d="M185.379,414.897h-35.31c-5.297,0-8.828-3.531-8.828-8.828s3.531-8.828,8.828-8.828h35.31
                    c5.297,0,8.828,3.531,8.828,8.828S190.676,414.897,185.379,414.897"/>
                <path fill="#CAD3DB" d="M185.379,450.207h-35.31c-5.297,0-8.828-3.531-8.828-8.828s3.531-8.828,8.828-8.828h35.31
                    c5.297,0,8.828,3.531,8.828,8.828S190.676,450.207,185.379,450.207"/>
                <path fill="#CAD3DB" d="M185.379,485.517h-35.31c-5.297,0-8.828-3.531-8.828-8.828s3.531-8.828,8.828-8.828h35.31
                    c5.297,0,8.828,3.531,8.828,8.828S190.676,485.517,185.379,485.517"/>
                <path fill="#CAD3DB" d="M150.069,308.966c-5.297,0-8.828-3.531-8.828-8.828V97.103c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v203.034C158.897,305.434,155.366,308.966,150.069,308.966"/>
                <path fill="#CAD3DB" d="M185.379,229.517c-5.297,0-8.828-3.531-8.828-8.828V97.103c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828V220.69C194.207,225.986,190.676,229.517,185.379,229.517"/>
                <path fill="#CAD3DB" d="M220.69,229.517c-5.297,0-8.828-3.531-8.828-8.828V97.103c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828V220.69C229.517,225.986,225.986,229.517,220.69,229.517"/>
                <path fill="#CAD3DB" d="M256,229.517c-5.297,0-8.828-3.531-8.828-8.828V97.103c0-5.297,3.531-8.828,8.828-8.828
                    c5.297,0,8.828,3.531,8.828,8.828V220.69C264.828,225.986,261.297,229.517,256,229.517"/>
                <path fill="#CAD3DB" d="M432.552,160.662c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v17.655C441.379,156.248,437.848,160.662,432.552,160.662 M432.552,213.628
                    c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828V204.8
                    C441.379,209.214,437.848,213.628,432.552,213.628 M432.552,266.593c-5.297,0-8.828-3.531-8.828-8.828V240.11
                    c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655C441.379,262.179,437.848,266.593,432.552,266.593
                    M432.552,319.559c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655
                    C441.379,315.145,437.848,319.559,432.552,319.559 M432.552,372.524c-5.297,0-8.828-3.531-8.828-8.828v-17.655
                    c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655C441.379,368.11,437.848,372.524,432.552,372.524 M432.552,425.49
                    c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655
                    C441.379,421.076,437.848,425.49,432.552,425.49 M432.552,478.455c-5.297,0-8.828-3.531-8.828-8.828v-17.655
                    c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655C441.379,474.041,437.848,478.455,432.552,478.455"/>
                <path fill="#CAD3DB" d="M467.862,160.662c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v17.655C476.69,156.248,473.159,160.662,467.862,160.662 M467.862,213.628
                    c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828V204.8
                    C476.69,209.214,473.159,213.628,467.862,213.628 M467.862,266.593c-5.297,0-8.828-3.531-8.828-8.828V240.11
                    c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655C476.69,262.179,473.159,266.593,467.862,266.593
                    M467.862,319.559c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655
                    C476.69,315.145,473.159,319.559,467.862,319.559 M467.862,372.524c-5.297,0-8.828-3.531-8.828-8.828v-17.655
                    c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655C476.69,368.11,473.159,372.524,467.862,372.524 M467.862,425.49
                    c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655
                    C476.69,421.076,473.159,425.49,467.862,425.49 M467.862,478.455c-5.297,0-8.828-3.531-8.828-8.828v-17.655
                    c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655C476.69,474.041,473.159,478.455,467.862,478.455"/>
            </g>
            <g>
                <path fill="#4E586A" d="M44.138,361.931c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v17.655C52.966,358.4,49.434,361.931,44.138,361.931 M44.138,414.897c-5.297,0-8.828-3.531-8.828-8.828
                    v-17.655c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655C52.966,411.366,49.434,414.897,44.138,414.897
                    M44.138,467.862c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828s8.828,3.531,8.828,8.828v17.655
                    C52.966,464.331,49.434,467.862,44.138,467.862"/>
                <path fill="#4E586A" d="M79.448,361.931c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828
                    c5.297,0,8.828,3.531,8.828,8.828v17.655C88.276,358.4,84.745,361.931,79.448,361.931 M79.448,414.897
                    c-5.297,0-8.828-3.531-8.828-8.828v-17.655c0-5.297,3.531-8.828,8.828-8.828c5.297,0,8.828,3.531,8.828,8.828v17.655
                    C88.276,411.366,84.745,414.897,79.448,414.897 M79.448,467.862c-5.297,0-8.828-3.531-8.828-8.828v-17.655
                    c0-5.297,3.531-8.828,8.828-8.828c5.297,0,8.828,3.531,8.828,8.828v17.655C88.276,464.331,84.745,467.862,79.448,467.862"/>
            </g>
            <g>
                <path fill="#CAD3DB" d="M185.379,70.621c-5.297,0-8.828-3.531-8.828-8.828V35.31c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v26.483C194.207,67.09,190.676,70.621,185.379,70.621"/>
                <path fill="#CAD3DB" d="M220.69,70.621c-5.297,0-8.828-3.531-8.828-8.828V35.31c0-5.297,3.531-8.828,8.828-8.828
                    s8.828,3.531,8.828,8.828v26.483C229.517,67.09,225.986,70.621,220.69,70.621"/>
            </g>
            </svg>
    )
}