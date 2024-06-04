//2.Implement a deep clone function in 
//JavaScript that creates a copy of a nested 
//object or array without any reference to the original.
let std1 = {
    name : "Mohesh",
    company: "xyz"
}
let std2 = std1
std1.name = "Mithun"
console.log("std1 name is: ",std1.name);
console.log("std2 name is: ",std2.name);