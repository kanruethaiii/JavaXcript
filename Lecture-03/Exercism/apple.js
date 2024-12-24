const array1 = [ 'Apple', 1  , false ];
const array2 = [ 'Fries', 2  , true ];
const array3 = [ 'Mars', 9  , 'Apple' ];


const commonElements = array1.filter(value => array2.includes(value) && array3.includes(value));

console.log("Common elements:", commonElements);