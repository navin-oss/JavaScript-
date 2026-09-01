
// const p1 = fetch('https://api.github.com/users')

//console.log(p1);
// Promise { <pending> } 

//p1 = pending 


//pending->fullfill->rejected

//promise-> object he uski 3 stages hoti he 
//pending , fullfilled , rejected .......

//fullfilled , rejected->zalyavrach read karaycha 

//data readable stream me i mean streams me ata he usko javascript object me convert karna he isliye response.json()

// const p2 = p1.then((res)=>{
//    return res.json();

// })

// p2.then((data)=>{
//     console.log(data);
// })

// fetch('https://api.github.com/users')
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{


//     const parent = document.getElementById("first");

//     for(let i = 0 ; i < data.length ; i++){
//     const image = document.createElement('img')
//     image.src = data[i].avatar_url
//     image.style.height = "40px"
//     image.style.width = "40px"

//     parent.append(image)
//     }

//    // console.log(data);
// }) //isko promise chaining kehte he 

//json -> means  javaScrip object  nahi he reee json sari language samajti hee java,python,and all
//javascript obj diff he javascript ka obj diff he and json
//json me function , undefined nahi kar sakte json is simmply bt the string 
//json is universal accepted format and javascript obj is used by javascript only 


// //format dikhta kaise he 

// const j1 = {
//     name : "navin",
//     age : 21 ,
//     adderess : "Sangli",
//     c : undefined
// }//this is javascript obj
// //undefined ko ignore karega 
// const json = JSON.stringify(j1)
// console.log(json)

// const jsonFormat = `{
//     "name" : "Rohit",
//     "age" : 20 ,
//     "adderess" : "sangli"

// }`

//java script obj me convert karna ho to 

// const j = JSON.parse(jsonFormat)


// console.log(j)
//why we convert into strings -> at the end bits ke form me hi trvael karna he sabko

//agar url hi galat ho jaye to blank dikhata he at least it  should show like url is wrong like this or internet off he  ,server down he and all 

//failed to fetch the resources like this msg will shown in thi case 

// fetch('https://api.github.com/users')
//   .then((res) => {

//     console.log(res)
//     if(!res.ok){
//         throw new Error("Data is not present ...")
//     }
//     return res.json();
//   })
//   .then((data) => {
//     const parent = document.getElementById("first");

//     for (let i = 0; i < data.length; i++) {
//       const image = document.createElement("img");

//       image.src = data[i].avatar_url;
//       image.style.height = "40px";
//       image.style.width = "40px";

//       parent.append(image);
//     }
//   })
//   .catch((error) => {
//     const parent = document.getElementById("first");

//     parent.textContent = error.message;
//   });//catch me error msg show karne ka heeeeee

  //reject wali condition -> when internet down , dns down , server down in only 3 cases mee hi->catch me hum kr skte he  


//api limit hit ho jaye and baki ke rejeect me nahi ate its in fullfilled -> khudse handle karna padega 

//promise create kaise kare

const p1 = new Promise((resolve,reject)=>{

    resolve({name : "Hello"});

    //reject("hello")
})
// console.log(p1)

p1.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})


