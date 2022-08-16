// declare the initial state
let initialState = 0;

let newState = (initialState += 1);
let secondState = (newState += initialState);
console.log(initialState);
console.log(newState);
console.log(secondState);
