//Write a function that checks if a given
//string is a palindrome, considering only
// alphanumeric characters and ignoring case.

// function checkPalindrom(string) {
//   const len = string.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "it is not Palindrom";
//     }
//     return "it is a Palindrom";
//   }
// }

// const string = "madam";
// // const string = "janifa";
// const value = checkPalindrom(string);
// console.log(value);

const readline = require ('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


function checkPalindrom(str){
    const sanStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const reversedStr = sanStr.split('').reverse().join('');
    return sanStr === reversedStr;
}

r1.question("Enter Your String: ",(input)=>{
    if(checkPalindrom(input)){
        console.log("String Is Palindrom");
    }else{
        console.log("String Is Not Palindrom");
    }
    r1.close();
})
