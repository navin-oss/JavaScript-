// const newElement = document.createElement("h2");

// newElement.textContent = "Navin is here";

// newElement.style.color = "white";
// newElement.id = "second";

// const element = document.getElementById("first");

// element.after(newElement);

// const newElement2 = document.createElement("h2");
// newElement2.textContent = "Welcome to my page" ;

// newElement2.style.color = "white" ;
// newElement.after(newElement2);

// const newElement3 = document.createElement("h2");
// newElement3.textContent = "Placement is coming..."
// newElement3.style.color = "white"
// newElement2.after(newElement3) 

// const newElement4 = document.createElement("h3")
// newElement4.textContent = "Be ready..."
// newElement4.style.backgroundColor = "pink"
// newElement3.before(newElement4)
// newElement4.style.fontSize = "20px"

// //attributes : special properties of an element like name in form id in html
// newElement2.setAttribute("hello", "ji")
// console.log(newElement2.getAttribute("hello")) //null

// const list = document.createElement("li")
// list.textContent = "milk"
// // list.style.color = "white"\
// const list2 = document.createElement("li")
// list2.textContent = "bread"
// const list3 = document.createElement("li")
// list3.textContent = "eggs"

// const unorderedList = document.getElementById("listing")
// unorderedList.appendChild(list)
// unorderedList.prepend(list2)
// unorderedList.append(list3)

// unorderedList.appendChild(list2) // it will move the list2 to the end of the list because it is already in the DOM

const arr = ["milk", "paneer", "tofu" , "bread", "eggs"]

const unorderElement = document.getElementById("listing")
const fragment = document.createDocumentFragment() // it will create a virtual DOM and will not re-render the DOM every time we append a new element

for(let i = 0; i < arr.length; i++){
   const list = document.createElement("li")
   list.textContent = arr[i] 
   //unorderElement.append(list ) : will take lots of calculations because it will re-render the DOM every time we append a new element
   fragment.append(list)
}

unorderElement.append(fragment) // it will append all the elements in the fragment to the DOM at once and will re-render the DOM only once

const s1 = document.getElementById("first")
s1.remove();