// console.log(a);
// var a = 20 ;
// var b = 30 ;
// console.log(add(3 , 4));//7 because we are calling the function before it is defined and the variables a and b are also defined before the function is called


// function add(){
//     return a + b;
// }   

//console.log(add()); //50 because we are calling the function after it is defined and the variables a and b are also defined before the function is called
//when to run javaScript code execution context is created and the code is executed line by line. During the creation phase of the execution context, all the variables and functions are hoisted to the top of the scope. This means that we can call a function before it is defined in the code because the function declaration is hoisted to the top of the scope. However, if we try to call a function expression before it is defined, we will get an error because the variable that holds the function expression is not hoisted.
//console.log(add(3 , 4));

//let , const 
console.log(a); // ReferenceError: Cannot access 'a' before initialization because let and const are not hoisted to the top of the scope like var. They are hoisted but not initialized, so we cannot access them before they are declared.
//memory allocation
//a = <uninitialized>(Temporal Dead Zone) because the variable a is hoisted but not initialized, so it is in a temporal dead zone until it is declared and initialized. This means that we cannot access the variable a before it is declared and initialized.

//b = <uninitialized>(Temporal Dead Zone) because the variable b is hoisted but not initialized, so it is in a temporal dead zone until it is declared and initialized. This means that we cannot access the variable b before it is declared and initializedlet a = 20 ;
//execution phase so a = 10 
//after declare and define only we can access the variable a and b because they are declared and initialized.
let a = 10 ;
const b = 30 ;

console.log(add(3 , 4)); // TypeError: add is not a function because we are trying to call a function expression before it is defined. The variable that holds the function expression is hoisted but not initialized, so it is in a temporal dead zone until it is declared and initialized. This means that we cannot access the variable that holds the function expression before it is declared and initialized.

//addNumbers = <uninitialized>(Temporal Dead Zone) because the variable that holds the function expression is hoisted but not initialized, so it is in a temporal dead zone until it is declared and initialized. This means that we cannot access the variable that holds the function expression before it is declared and initialized.

const addNumbers = function addNumbers(){
    return a + b;
}
console.log(a);
console.log(b);
console.log(addNumbers());