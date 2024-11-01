/*
! Article: Initialize Array - Constructor Vs Factory
*/
// Literal type --- []

// Constructor Pattern
const a1 = new Array();
console.log(a1, a1.length);

const a2 = new Array(5);
console.log(a2, a2.length);


// Factory Pattern
const b1 =  Array();
console.log(b1, b1.length);

const b2 =  Array(5);
console.log(b2, b2.length);