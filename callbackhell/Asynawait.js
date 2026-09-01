
// async function greet(){
//     // return "navin"

//     return new Promise((res , rej) =>{
//         // res("navin")
//         rej("navin" )
//     })
// }

// const response = greet()
// //console.log(response)
// //response ek promise he 
// response.then((data) => console.log(data))
// .catch((err) => {
//     console.log("error : " , err)
// })


//asyn task thoda wait ke bad task hoga 
//like fetching json data from api 


// fetch("https://api.github.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data))//complex format 


async function github(){
const response = await fetch("https://api.github.com/users")

const data = await response.json()

console.log(data) 


}

github()

console.log("Hello ji kaise ho...")
//await => program ko freeze karta he jab tak response nahi ata kam mt karna 

//make the format easy to write the promise 

//await ko aysnc ke sath hi prayog karna hota he 
//async jo asyncronous task he jo thodi der me execute hone wale he unko web api ko deta he 



