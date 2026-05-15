// //Scope and closure 

// let a = 10;
// const b = 20 ;

// //console.log(a); //10 because we are accessing the variable a which is declared and initialized with the value of 10.


// if(true){
//     console.log(a); //10 because we are accessing the variable a which is declared and initialized with the value of 10. This is because of scope. Scope is the area in which a variable is defined and can be accessed. In this case, the variable a is defined in the global scope, so it can be accessed anywhere in the code.
//     let d= 20 ;
//     console.log(d); //20 because we are accessing the variable d which is declared and initialized with the value of 20. This is because of block scope. Block scope is the area in which a variable is defined and can be accessed within a block of code, such as an if statement or a for loop. In this case, the variable d is defined in the block scope of the if statement, so it can only be accessed within that block of code.
// }
// //console.log(d); //ReferenceError: d is not defined because the variable d is declared inside the block scope of the if statement and it is not accessible outside the block. This is because of block scope. The variable d is defined in the block scope of the if statement and it cannot be accessed outside the block.

// function greet(){
//     console.log(a);
// }

// greet(); //10 because we are accessing the variable a which is declared and initialized with the value of 10. This is because of closure. Closure is a feature in JavaScript where an inner function has access to the outer function's variables and parameters even after the outer function has returned. In this case, the inner function greet() has access to the variable a which is declared in the outer scope. This allows us to access the variable a even after the outer function has returned.

// function greet2(){
//     let c = 30 ;
// }
//console.log(c); //ReferenceError: c is not defined because the variable c is declared inside the function greet2() and it is not accessible outside the function. This is because of scope. The variable c is defined in the local scope of the function greet2() and it cannot be accessed outside the function.

//global scope  = variables that are declared outside of any function or block and can be accessed anywhere in the code. In this case, the variables a and b are declared in the global scope, so they can be accessed anywhere in the code.
//local scope = variables that are declared inside a function and can only be accessed within that function. In this case, the variable c is declared in the local scope of the function greet2() and it can only be accessed within that function.
//function scope = variables that are declared inside a function and can only be accessed within that function. In this case, the variable c is declared in the function scope of the function greet2() and it can only be accessed within that function.
//block scope = variables that are declared inside a block of code, such as an if statement or a for loop, and can only be accessed within that block of code. In this case, the variable d is declared in the block scope of the if statement and it can only be accessed within that block of code.


// let global = 30 ;

// function greet3(){
//     let global = 40 ;
//     console.log(global); //40 because we are accessing the variable global which is declared and initialized with the value of 40. This is because of scope. The variable global is defined in the local scope of the function greet3() and it shadows the variable global that is defined in the global scope. This means that when we access the variable global inside the function greet3(), it refers to the local variable global and not the global variable global.
// }

// greet3(); //40 because we are calling the function greet3() which has a local variable global that shadows the global variable global. This is because of scope. The variable global is defined in the local scope of the function greet3() and it shadows the variable global that is defined in the global scope. This means that when we access the variable global inside the function greet3(), it refers to the local variable global and not the global variable global.

// console.log(global); //30 because we are accessing the variable global which is declared and initialized with the value of 30. This is because of scope. The variable global is defined in the global scope, so it can be accessed anywhere in the code. In this case, we are accessing the global variable global outside of the function greet3(), so it refers to the global variable global and not the local variable global that is defined in the function greet3().

// function greet4(){
//     let g = 50 ;    
//     function greet5(){
//         console.log(g); //50 because we are accessing the variable g which is declared and initialized with the value of 50. This is because of closure. The inner function greet5() has access to the variable g which is declared in the outer scope of the function greet4(). This allows us to access the variable g even after the outer function greet4() has returned.
//     }
//     greet5(); //50 because we are calling the inner function greet5() which has access to the variable g that is declared in the outer scope of the function greet4(). This is because of closure. The inner function greet5() has access to the variable g which is declared in the outer scope of the function greet4(). This allows us to access the variable g even after the outer function greet4() has returned.
// }

// greet4(); //50 because we are calling the function greet4() which has an inner function greet5() that has access to the variable g that is declared in the outer scope of the function greet4(). This is because of closure. The inner function greet5() has access to the variable g which is declared in the outer scope of the function greet4(). This allows us to access the variable g even after the outer function greet4() has returned.

// function createCounter() {
//     let count = 0;

//     function incrementCounter() {
//         console.log("Counter incremented");
//         count++;
//         return count;
//     }
//     return incrementCounter; //this will return the incrementCounter function which is defined inside the createCounter function. This is because of closure. The inner function incrementCounter() has access to the variables and parameters of the outer function createCounter() even after the outer function has returned. This allows us to call the incrementCounter() function through the counter variable which holds the reference to the incrementCounter() function.
// }

// // const counter = createCounter();
// // counter(); //Counter incremented because we are calling the function counter() which is returned by the createCounter() function. This is because of closure. The inner function incrementCounter() has access to the variables and parameters of the outer function createCounter() even after the outer function has returned. This allows us to call the incrementCounter() function through the counter variable which holds the reference to the incrementCounter() function.
// // console.log(counter); // [Function: incrementCounter] because the counter variable holds the reference to the incrementCounter() function which is defined inside the createCounter() function. This is because of closure. The inner function incrementCounter() has access to the variables and parameters of the outer function createCounter() even after the outer function has returned. This allows us to call the incrementCounter() function through the counter variable which holds the reference to the incrementCounter() function.

// const counter = createCounter();
// console.log(counter()); // Counter incremented, 1 because we are calling the function counter() which is returned by the createCounter() function. This is because of closure. The inner function incrementCounter() has access to the variables and parameters of the outer function createCounter() even after the outer function has returned. This allows us to call the incrementCounter() function through the counter variable which holds the reference to the incrementCounter() function. The first time we call counter(), it increments count from 0 to 1 and returns 1.
// console.log(counter()); // Counter incremented, 2 because we are calling the function counter() again which is returned by the createCounter() function. This is because of closure. The inner function incrementCounter() has access to the variables and parameters of the outer function createCounter() even after the outer function has returned. This allows us to call the incrementCounter() function through the counter variable which holds the reference to the incrementCounter() function. The second time we call counter(), it increments count from 1 to 2 and returns 2. 
// console.log(counter()); // Counter incremented, 3 because we are calling the function counter() again which is returned by the createCounter() function. This is because of closure. The inner function incrementCounter() has access to the variables and parameters of the outer function createCounter() even after the outer function has returned. This allows us to call the incrementCounter() function through the counter variable which holds the reference to the incrementCounter() function. The third time we call counter(), it increments count from 2 to 3 and returns 3.
//referce ko return kr ke de diya or incrementCounter function ke andar count variable ko access kr ke usko increment kr diya and return kr diya. This is the power of closure in JavaScript. It allows us to create private variables and functions that can only be accessed through the returned function, providing encapsulation and data hiding.
//clososure = function that remembers the variables and parameters of its outer function even after the outer function has returned. It allows us to create private variables and functions that can only be accessed through the returned function, providing encapsulation and data hiding. In this example, the incrementCounter() function is a closure that has access to the count variable defined in the createCounter() function, allowing it to maintain state across multiple calls.

//let balance = 1000 ;

//developer can change this balace unknowlingy change this balanace


//user.deposit(500);
// user.deposit(500);
// console.log(user.balance); //1500 because we are calling the deposit() method on the user object and passing the amount of 500. The deposit() method checks if the amount is a number and greater than 0, then it adds the amount to the balance property of the user object using the this keyword. This updates the balance from 1000 to 1500.
// console.log(user.deposit(500)); //2000 because we are calling the deposit() method on the user object and passing the amount of 500 again. The deposit() method checks if the amount is a number and greater than 0, then it adds the amount to the balance property of the user object using the this keyword. This updates the balance from 1500 to 2000 and returns the updated balance, which is 2000.

// function createBankAccount() {
//     let balance = 1000 ; //this is a private variable that can only be accessed through the methods defined in the user object. This is because of closure. The inner functions deposit(), withdraw(), and getBalance() have access to the variables and parameters of the outer function createBankAccount() even after the outer function has returned. This allows us to create a bank account with a private balance variable that can only be accessed and modified through the methods defined in the user object.


//     const  user = {
//     deposit : function(amount){
//         //console.log(this); //{balance: 1000, deposit: ƒ} because we are accessing the this keyword which refers to the user object. The this keyword is used to access the properties and methods of the object that is calling the method. In this case, the deposit() method is called on the user object, so the this keyword refers to the user object and we can access its properties and methods through it.
//         if(typeof amount == "number" && amount > 0){
//             balance += amount ;
//             return balance; //this will return the updated balance after the deposit is made. This is because we are using the this keyword to access the balance property of the user object and update it with the new amount. The return statement allows us to get the updated balance after the deposit is made, which can be useful for further operations or for displaying the updated balance to the user.
//         }
//     },
//         withdraw : function(amount){
//             if(typeof amount == "number" && amount > 0 && amount <= balance){
//                 balance -= amount ;
//                 return balance; //this will return the updated balance after the withdrawal is made. This is because we are using the this keyword to access the balance property of the user object and update it with the new amount. The return statement allows us to get the updated balance after the withdrawal is made, which can be useful for further operations or for displaying the updated balance to the user.
//             }
//         },
//         getBalance : function(){
//             return balance; //this will return the current balance of the user. This is because we are using the this keyword to access the balance property of the user object and return its value. The getBalance() method allows us to retrieve the current balance of the user, which can be useful for displaying it to the user or for further operations that require knowledge of the current balance.
//         }

//     }
//     return user; //this will return the user object which contains the balance property and the deposit, withdraw, and getBalance methods. This is because we are creating a bank account for the user and we want to return the user object that represents the bank account with its properties and methods for managing the balance.
// }

// const customer = createBankAccount();
// console.log(customer); //{deposit: ƒ, withdraw: ƒ, getBalance: ƒ} because we are calling the createBankAccount() function which returns the user object that contains the deposit, withdraw, and getBalance methods. The customer variable holds the reference to the user object returned by the createBankAccount() function, allowing us to access its properties and methods for managing the balance of the bank account.
// console.log(customer.getBalance()); //1000 because we are calling the getBalance() method on the customer object which returns the current balance of the user. This is because we are using the this keyword to access the balance property of the user object and return its value. The getBalance() method allows us to retrieve the current balance of the user, which can be useful for displaying it to the user or for further operations that require knowledge of the current balance.
// console.log(customer.deposit(500)); //1500 because we are calling the deposit() method on the customer object and passing the amount of 500. The deposit() method checks if the amount is a number and greater than 0, then it adds the amount to the balance property of the user object using the this keyword. This updates the balance from 1000 to 1500 and returns the updated balance, which is 1500.
// console.log(customer.withdraw(200)); //1300 because we are calling the withdraw() method on the customer object and passing the amount of 200. The withdraw() method checks if the amount is a number, greater than 0, and less than or equal to the current balance. If these conditions are met, it subtracts the amount from the balance property of the user object using the this keyword. This updates the balance from 1500 to 1300 and returns the updated balance, which is 1300.  


//Higher order functions = functions that can take other functions as arguments or return functions as their result. They are a powerful feature in JavaScript that allows us to create more flexible and reusable code. Examples of higher order functions include map(), filter(), reduce(), and forEach() which are commonly used for array manipulation, as well as functions that return other functions, such as closures and factory functions. Higher order functions enable us to abstract away common patterns of code and create more modular and composable code.
// function double(){
//     return function execute(){
//         console.log("Executing the function"); //this will log the message "Executing the function" to the console when the execute() function is called. This is because we are defining a function called execute() inside the doublt() function, and when we call doublt(), it will return the execute() function, allowing us to call it and see the message logged to the console.
//     }
//     //return execute; //this will return the execute() function which is defined inside the doublt() function. This is because we are creating a higher order function that returns another function, allowing us to call the returned function and see the message logged to the console when it is executed.
// }

// const s = double();
// s(); // This will log "Executing the function" to the console.

function double(value){
    return function execute(num){
        return num * value; //this will return the result of multiplying the num parameter by the value parameter when the execute() function is called. This is because we are defining a function called execute() inside the double() function, and when we call double() with a specific value, it will return the execute() function that has access to that value through closure. When we call the returned execute() function with a specific num, it will multiply that num by the value that was passed to double() and return the result.
    }
}

const s = double(20)(5);
console.log(s); //100