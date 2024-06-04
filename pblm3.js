//3. Write a recursive function to
//calculate the factorial of a given number.
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
let num1 = 5;
let result = factorial(num1);
console.log("The Result is: "+result);