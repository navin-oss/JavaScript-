// function greeting(){
//     console.log("Hello World");
//     return 10;
// }

// greeting();

//for reusability of code we make functions..

// function add(a,b){
//     return a+b ;
// }

// console.log(add(5,10));

// function addNumber(number1,number2 ,number3 , number4 = 0){ //number4 is an optional parameter with default value of 0.
//     const sum = number1 + number2 + number3 + number4;
//     console.log(sum);
// }

//rest operator
// function addNumber(...num){
//     let sum = 0;
//     for(let i of num){
//         sum += i;
//     }   
//     console.log(sum);
// }

// //console.log(addNumber(5,10)); //15

// addNumber(3 , 3); //NaN (Not a Number) because we are trying to add a number with undefined value.

// addNumber(3 , 3 , 4); //10

// addNumber(3 , 3 , 4 , 5); //15 because we are only adding first four numbers.
// addNumber(4 , 5 , 6 , 7); //22 because we are only adding first four numbers.

const arr = [1 , 2 , 3 , 4 , 5];
const arr2 = [6 , 7 , 8 , 9 , 10];

const [first , second , ...rest] = arr; //rest operator is used to collect the remaining elements of the array into a new array.

console.log(first , second , rest); //1 2 [3,4,5] because we are only destructuring first two elements of the array and rest of the elements are collected in a new array called rest.

const ans = [...arr , ...arr2]; //this will create a new array with two elements which are arr and arr2.
console.log(ans); //[[1,2,3,4,5] , [6,7,8,9,10]] because we are creating a new array with two elements which are arr and arr2.

/* => spread operator:  is used to spread the elements of an array into a new array. It is also used to spread the properties of an object into a new object. 
=> rest operator: is used to collect the remaining elements of an array into a new array. It is also used to collect the remaining properties of an object into a new object.
=> destructuring: is used to extract values from an array or an object and assign them to variables. It is also used to extract values from a function and assign them to variables. */

//for creating functions have 2 ways 

//expression function
const addNumber = function(num1, num2){
    return num1 + num2;
}
console.log(addNumber(5,10)); //15
/* we can not call the function before it is defined because it is a function expression and it is not hoisted. */

console.log(addNumbers(5,10)); //15
function addNumbers(num1, num2){
    return num1 + num2;
}
console.log(addNumbers(5,10)); //15
/* we can call the function before it is defined because it is a function declaration and it is hoisted. */

//arrow function
const addNum = (num1 , num2) =>  num1 + num2;
console.log(addNum(5,10)); //15
/*if you wanted to return only one line of code then you can omit the curly braces and the return keyword. */

let arr3 = [10 , 11 , 90 , 100];
arr3.sort((a,b) => a - b); //this will sort the array in ascending order.
console.log(arr3); //[10,11,90,100] because we are sorting the array in ascending order. If we want to sort the array in descending order then we can use b - a instead of a - b.

//square
const squareNumber = num => num*num;

console.log(squareNumber(4));
// /*if we have single parameter then we can omit the parentheses as well as bracket (). */

// // const greeting = () => {
// //    return {
// //         name : "Navin",
// //         age : 21 ,
// //     }
// //    // return user ;
// // }
// // const greeting = () => ({
// //     name : "Navin",
// //     age : 21 ,
// // })
// // console.log(greeting()); //{name: "Navin", age: 21} because we are returning an object from the function.
// /*if we want to return an object from the function then we can wrap the object in parentheses () because if we do not wrap the object in parentheses then it will be treated as a block of code and it will not return the object. */

// //IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined. It is also known as self-invoking function. It is used to create a new scope and avoid polluting the global scope.

// function greeting(){
//     console.log("Hello jii");
// }
// greeting(); //Hello jii because we are calling the function after it is defined.

// (function(){
//     console.log("Hello World");
// })();
// /* this IIFE used for private variables and functions because it creates a new scope and the variables and functions defined inside the IIFE are not accessible from outside the IIFE. */

// //Callback function is a function that is passed as an argument to another function and is executed after the completion of the other function. It is used to handle asynchronous operations.

function greet(){
    console.log("Hello jii kaise ho");
}
function dance(){
    console.log("I am dancing");
}

function  meet(callback){
    console.log("Nice to meet you");
   //greet();hardcoded function not useful for reuse
    //code hota jisko execute marta 
    callback(); //this will execute the callback function which is passed as an argument to the meet function.
    console.log("I have finished meeting ");
}

meet(greet); /* first we are calling the meet function and passing the greet function as an argument. Then the meet function will execute and after that it will execute the greet function because it is a callback function. */
meet(dance); /* first we are calling the meet function and passing the dance function as an argument. Then the meet function will execute and after that it will execute the dance function because it is a callback function. */
//make it flexible by passing the callback function as an argument to the meet function. This way we can reuse the meet function with different callback functions.

//real world application of callback function
function zomatoOrderPlaced(){
    console.log("Order placed successfully...");
}
//blinkit ka merge hua 

function blinkitOrderPlaced(){
    console.log("We have started processing your order...");
}

function payment(amount , callback){
    console.log(` ${amount} payment initilized `);
    console.log("Payment successful...");
    callback(); //this will execute the callback function after the payment is successful.

    //GST:
    //Rider :
    //Zomato : comapny kitna paisa lega

}

payment(500 , zomatoOrderPlaced); /* first we are calling the payment function and passing the amount as an argument. Then the payment function will execute and after that it will execute the zomatoOrderPlaced function because it is a callback function. */
payment(500 , blinkitOrderPlaced); /* first we are calling the payment function and passing the amount as an argument. Then the payment function will execute and after that it will execute the blinkitOrderPlaced function because it is a callback function. */

/* callback fun make funs flexible and reusable because we can pass different callback functions to the same function and it will execute the callback function after the completion of the main function. It is also used to handle asynchronous operations because we can pass a callback function that will be executed after the completion of an asynchronous operation. */

