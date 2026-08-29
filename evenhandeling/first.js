// function handleclick(){

//     const element = document.getElementById("first")
//     element.textContent = "Navin is here"
// }

//event : something that happens on the page like click, mouseover, keydown etc
//event handler : a function that is called when an event happens
//event listener : a function that listens for an event and calls the event handler when the event happens

// const element = document.getElementById("first")
// element.onclick = function handleClick(){
//     element.textContent = "Navin is here.."
// }not use frequently coz it does override of previous function value 

// //best is :
// const element = document.getElementById("first")
// element.addEventListener("click" , ()=>{
//     element.textContent = "navin is here...."
// })

// element.addEventListener("click" , ()=>{
//     element.style.backgroundColor = "blue"
// })//aaram se ye hojayega 

// let a = {
//     greet: function(value){
//         console.log("hello" , value)
//     }
// }

// a.greet(10);
// a.greet();

// element.addEventListener("mousemove" , ()=>{
//     element.textContent = "navin is here...."
// })

// element.addEventListener("mouseout" , ()=>{
//     element.style.backgroundColor = "blue"
// })
 

// const child1 = document.getElementById("child1")
// child1.addEventListener("click" , ()=>{
//  child1.textContent = "Child 1 is here ...."
// })

// const parent = document.getElementById("parent")
// console.log(parent.children)

// for(let child of parent.children){
//     child.addEventListener("click" , () =>{
//         child.textContent = "I am Clicked..."
//     })
// }

//even better :
// bubbling 
// const grandParent = document.getElementById("grandparent")

// grandParent.addEventListener("click" , ()=> {
//     console.log("Grand Parent is clicked....")
// },true)

// const Parent = document.getElementById("parent")

// Parent.addEventListener("click" , ()=> {
//     console.log("Parent is clicked....")
// },true)

// const child = document.getElementById("child")

// child.addEventListener("click" , (e)=> {
//     console.log(" child is clicked....")
//     e.stopPropagation
// },true)
//true karke first grandparent then parent then child and by default its false 

//why so : window->document->html
//                              / \
//                         head   body 
//                                  \
//                                 grandparent 
//                                    \
//                                    parent
//                                      \
//                                      child

// capture phase ->click kelyavr first phase 
// target phase ->jha click kiya he wo target hota he 
// bubling phase -> child pr bubble phase event listner lagaya he agar he to upar traverse karega 
//bubbling ->andaar  se bahr ki or jayegaa

//capture phase on he ya off he iskeliye ye true false he -> true kiya to capture phase mi hi dekhega eventlistener he ha he to usko pahle print karega 
//capture phase on hai : top to down aaoge : top se down aaoge usi time event ko trigger kar diya jayga 
//capture off he : down to up : bubbling phase tabhi trigger kiya jayega 

//koi bhi event perform kiya he to event ka ek object de dega usme bahot  sari indformation hoti he us obj me all info when u done any event 
//e.stopPropagation krne se bubbling nahi hogi

//e.target se bata dega konsa div event trigger kar rha he and which element cause trigger... 

//for removing event listener :

const parent = document.getElementById("parent")

// parent.addEventListener("click" , (e) => {
//     // console.log(e.target);
//     e.target.textContent = "I am clicked..."
// })

// parent.removeEventListener("click" , (e) => {
//     // console.log(e.target);
//     e.target.textContent = "I am clicked..."
// })//aisa mat karna kukni memory alag alag milti he

function handleClick(e){
    e.target.textContent = "I am clicked..."
}

parent.addEventListener("click" , handleClick)
parent.removeEventListener("click" , handleClick) //best way
