// //js is single threaded synchronous language but it can handle asynchronous code using event loop and callback functions.


// //javas kisi ka bhi wait nahi karta he wo apna kaam karta rehta he aur jab bhi koi kaam complete hota he to uska callback function call kar deta he.

// //web apis(api is nothing but the function call)

// // web api ka sara kamal he browser ka he jaise setTimeout, setInterval, fetch, XMLHttpRequest, DOM events etc. ye sab web api ke under aate he. ye web api asynchronous kaam karte he aur jab bhi koi kaam complete hota he to uska callback function call kar dete he. ye callback function event loop ke through call hote he.
// //DOM , fetch apis and all

// // setTimeout(() => {
// //     console.log("setTimeout");
// // }, 6000);

// const button = document.getElementById("btn");
// button.addEventListener("click", () => {
//     console.log("Button clicked");
//     button.textContent = "Hello"
// });

// const button2 = document.getElementById("btn2");
// button2.addEventListener("click", () => {
//     console.log("Button2 clicked");
//     button2.textContent = "Hello2"
// })

// const button3 = document.getElementById("btn3");
// button3.addEventListener("click", () => {
//     console.log("Button3 clicked");
//     button3.textContent = "Hello3"
// })

// //webapi ka sara khel he 

// // call stack -> web api -> callback queue -> event loop -> call stack

// window object ek global object he jisme sare web api ke functions hote he jaise setTimeout, setInterval, fetch, XMLHttpRequest, DOM events etc. ye sare web api ke under aate he. ye web api asynchronous kaam karte he aur jab bhi koi kaam complete hota he to uska callback function call kar dete he. ye callback function event loop ke through call hote he.
// window ka obj browser create katrta he dom api , fetch api, setTimeout, setInterval, XMLHttpRequest, DOM events etc. ye sare web api ke under aate he. ye web api asynchronous kaam karte he aur jab bhi koi kaam complete hota he to uska callback function call kar dete he. ye callback function event loop ke through call hote he.
// window aapko local storage ka access deta he jaise localStorage, sessionStorage, cookies etc. ye sare web api ke under aate he. ye web api asynchronous kaam karte he aur jab bhi koi kaam complete hota he to uska callback function call kar dete he. ye callback function event loop ke through call hote he.

// callback function -> callbackqueue -> event loop -> call stack -> execution

// call stack empty hoga tohi event loop callback queue se callback function ko call stack me daal dega aur fir wo execute hoga. ye process tab tak chalega jab tak call stack empty na ho jaye aur callback queue me koi callback function na bacha ho.
// event loop ka kaam he ki wo call stack ko check karta rehta he ki call stack empty he ya nahi agar call stack empty he tohi event loop callback queue se callback function ko call stack me daal dega aur fir wo execute hoga. ye process tab tak chalega jab tak call stack empty na ho jaye aur callback queue me koi callback function na bacha ho.
// why call stack khali hone ka wait karta he coz fir otpt diff difff  ayega har case me wo nahi ana chahiye

// fetch api ka kaam he ki wo server se data fetch karta he aur jab bhi data fetch ho jata he to uska callback function call kar deta he. ye callback function event loop ke through call hote he. fetch api asynchronous kaam karte he aur jab bhi koi kaam complete hota he to uska callback function call kar dete he. ye callback function event loop ke through call hote he.

// micro task queue -> event loop -> call stack -> execution

// priority first micro task queue fir callback queue fir call stack fir execution ye process tab tak chalega jab tak call stack empty na ho jaye aur micro task queue me koi callback function na bacha ho. ye process tab tak chalega jab tak call stack empty na ho jaye aur callback queue me koi callback function na bacha ho.
// microtask queue me fetch or outer server se data fetch karne ke liye use hota he. ye microtask queue asynchronous kaam karte he aur jab bhi koi kaam complete hota he to uska callback function call kar dete he. ye callback function event loop ke through call hote he.