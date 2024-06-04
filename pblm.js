//Write a function that takes an 
// array of objects and a key, and 
// returns a new array sorted 
// based on the values of that 
// key in ascending order.

const arr = [
    {name:"jalil",age: 18},
    {name:"karim",age: 8},
    {name:"Rahim",age: 20},
    {name:"Abbas",age: 13},
]

arr.sort((a,b)=> a.age - b.age);
console.log(arr);