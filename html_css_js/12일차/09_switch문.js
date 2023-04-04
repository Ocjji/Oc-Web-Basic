'use strict';

let a = 1;

switch ( a ) {
    case 1 : case 2 : case 3 : 
        console.log('100'); break;
    case 4 : case 5 : 
        console.log('200'); break;
    default : console.log('300');
}

/* switch ( a ) {
    case 1 : console.log('100'); break;
    case 2 : console.log('100'); break;
    case 3 : console.log('100'); break;
    case 4 : console.log('200'); break;
    case 5 : console.log('200'); break;
    default : console.log('300');
} */
