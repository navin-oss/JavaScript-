// // const arr = [1 , 2 , 3 , 33, 4 ] ;

// // arr.forEach((number , index) => {
// //     console.log(number , index , arr);
// // });
// // //foreach accept callback function and return undefined 
// // //it can take 3 arguments 1. current value 2. index 3. array itself where current value is compulsory and other two are optional and other two are optional

// // let sum = 0;
// // arr.forEach((number) => {
// //     sum = sum + number 
// // });
// // console.log(sum);

// //filter method : filter method is used to filter the elements of an array based on a condition and return a new array with the filtered elements. It does not modify the original array.


// // const newArr = arr.filter((number) => number > 3); // it will return a new array with elements greater than 3
// // // it will return [33 , 4] because 33 and 4 are greater than 3

// // console.log(arr); // it will return the original array [1 , 2 , 3 , 33, 4 ] because filter does not modify the original array
// // console.log(newArr); // it will return the filtered array [33 , 4]
// //arr.filter arr. because we use this method on object arr and filter is a method of array
//  // const this  = [1 , 2 , 3 , 33, 4 ] ;
// // const compare = (num) => num > 3; // this is the callback function that we will pass to the filtering method    
// // compare(4); // it will return true because 4 is greater than 3
// // compare(2); // it will return false because 2 is not greater than 3
// // Array.prototype.filtering = function(compare) {
// //     const ans = [];
// //     for (let num of this) { //this refers to the array on which the method is called
// //         if (compare(num)) { //compare is the callback function passed as an argument to the filtering method
// //            ans.push(num); // if the condition is true then it will add the number to the new array
// //         }   }
// //     return ans;
// // };
// // const newArr = arr.filtering((num) => num > 3); // it will return [33 , 4] because 33 and 4 are greater than 3
// // console.log(newArr); // it will return the filtered array [33 , 4]

// // const a = [80 , 90 , 100 , 110 , 120] ;
// // // const newA = a.filtering((num) => num > 100); 
// // // console.log(newA); ///it give error because filtering method is not defined for array a because we have defined the filtering method for array arr and not for array 
// // const newA = a.filtering((num) => num > 100); // it will return [110 , 120] because 110 and 120 are greater than 100
// // console.log(newA); // it will return the filtered array [110 , 120]
// // //this is not recommended to use because it can cause conflicts if we have another array with the same name and it can also cause confusion for other developers who are working on the same codebase. It is better to use the built-in filter method instead of creating a custom method.

// //Mapping method : map method is used to create a new array by applying a function to each element of the original array. It does not modify the original array.
// // const arr = [1 , 2 , 3 , 33, 4 ] ;
// // const newArr = arr.map((number) => number * 2); // it will return a new array with each element multiplied by 2 [2 , 4 , 6 , 66, 8]
// // console.log(arr); // it will return the original array [1 , 2 , 3 , 33, 4 ] because map does not modify the original array
// // console.log(newArr); // it will return the mapped array [2 , 4 , 6 , 66, 8] because each element is multiplied by 2
// // const b = [20 , 50 , 60 , 9];

// // const newArr2 = b.map((num) => num * 2);
// // console.log(newArr2) ;

// const products =[
//   { "id": 1, "name": "Laptop", "category": "electronics", "price": 55000, "inStock": true },
//   { "id": 2, "name": "Smartphone", "category": "electronics", "price": 30000, "inStock": true },
//   { "id": 3, "name": "Headphones", "category": "electronics", "price": 2500, "inStock": false },
//   { "id": 4, "name": "Tablet", "category": "electronics", "price": 22000, "inStock": true },
//   { "id": 5, "name": "Smartwatch", "category": "electronics", "price": 8000, "inStock": false },
//   { "id": 6, "name": "Camera", "category": "electronics", "price": 45000, "inStock": true },
//   { "id": 7, "name": "Printer", "category": "electronics", "price": 12000, "inStock": true },
//   { "id": 8, "name": "Monitor", "category": "electronics", "price": 15000, "inStock": false },
//   { "id": 9, "name": "Keyboard", "category": "electronics", "price": 1800, "inStock": true },
//   { "id": 10, "name": "Mouse", "category": "electronics", "price": 1200, "inStock": true },

//   { "id": 11, "name": "Backpack", "category": "non-electronics", "price": 1500, "inStock": true },
//   { "id": 12, "name": "Water Bottle", "category": "non-electronics", "price": 500, "inStock": false },
//   { "id": 13, "name": "Notebook", "category": "non-electronics", "price": 100, "inStock": true },
//   { "id": 14, "name": "Pen", "category": "non-electronics", "price": 20, "inStock": true },
//   { "id": 15, "name": "Chair", "category": "non-electronics", "price": 3500, "inStock": false },
//   { "id": 16, "name": "Table", "category": "non-electronics", "price": 7000, "inStock": true },
//   { "id": 17, "name": "Shoes", "category": "non-electronics", "price": 2500, "inStock": true },
//   { "id": 18, "name": "T-Shirt", "category": "non-electronics", "price": 800, "inStock": false },
//   { "id": 19, "name": "Book", "category": "non-electronics", "price": 450, "inStock": true },
//   { "id": 20, "name": "Umbrella", "category": "non-electronics", "price": 600, "inStock": true },

//   { "id": 21, "name": "Speaker", "category": "electronics", "price": 5000, "inStock": false },
//   { "id": 22, "name": "Router", "category": "electronics", "price": 3000, "inStock": true },
//   { "id": 23, "name": "Projector", "category": "electronics", "price": 40000, "inStock": false },
//   { "id": 24, "name": "Power Bank", "category": "electronics", "price": 1800, "inStock": true },
//   { "id": 25, "name": "Fan", "category": "electronics", "price": 2500, "inStock": true },

//   { "id": 26, "name": "Pillow", "category": "non-electronics", "price": 700, "inStock": false },
//   { "id": 27, "name": "Blanket", "category": "non-electronics", "price": 1500, "inStock": true },
//   { "id": 28, "name": "Football", "category": "non-electronics", "price": 1200, "inStock": true },
//   { "id": 29, "name": "Cricket Bat", "category": "non-electronics", "price": 2500, "inStock": false },
//   { "id": 30, "name": "Tennis Racket", "category": "non-electronics", "price": 3500, "inStock": true }
// ];

// // const inStockProducts = products.filter((product) => product.inStock); // it will return a new array with only the products that are in stock
// // console.log(inStockProducts); // it will return the array of products that are in stock

// // const p = products.filter((product) => product.category == "non-electronics");
// // console.log(p);// it will return a new array with only the products that are in the non-electronics category

// //  const exp = products.filter((product) => product.price > 5000).sort((a,b) => a.price - b.price).map((p) => ({name : p.name , price : p.price}));; // it will return a new array with only the products that are priced above 5000
// // console.log(exp);

// // const pro = products.map((p) => ({name : p.name , price : p.price}));
// // console.log(pro);

// //reduce method : reduce method is used to reduce an array to a single value by applying a function to each element of the array. It does not modify the original array.and give final valuse like totalsum or product of all elements in the array or maximum or minimum value in the array etc. It takes a callback function and an initial value as arguments. The callback function takes two arguments, the accumulator and the current value. The accumulator is the value that is returned by the callback function after each iteration and it is used to accumulate the result. The current value is the current element being processed in the array. The initial value is the value that is used as the first argument to the first call of the callback function. If no initial value is provided, the first element of the array is used as the initial value and the iteration starts from the second element.\

// // const totalPrice = products.reduce((acc , product) => {
// //     if(product.inStock) return acc + product.price;
// //     else return acc;
// // }, 0); // it will return the total price of all the products in the array
// // console.log(totalPrice);

// //set = a set is a collection of unique values. It does not allow duplicate values and it does not maintain the order of the elements. It is implemented using a hash table and it provides constant time complexity for adding, deleting and searching for elements. It is used to store unique values and to perform set operations like union, intersection and difference. It is also used to remove duplicate values from an array.
// // const arr = [1 , 2 , 3 , 4 , 5 , 5 , 6 , 7 , 8 , 9 , 10 , 9] ;

// // const s1 = new Set(arr); // it will create a set with the unique values of the array
// // console.log(s1); // it will return a set with the unique values of the array {1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10}

// // console.log(s1.has(5)); // it will return true because 5 is present in the set
// // console.log(s1.has(11)); // it will return false because 11 is not present in the set
// // s1.delete(5); // it will delete the value 5 from the set
// // console.log(s1); // it will return a set with the unique values of the array except 5 {1 , 2 , 3 , 4 , 6 , 7 , 8 , 9 , 10}
// // console.log(s1.size); // it will return the size of the set which is 9
// // s1.clear(); // it will clear the set and make it empty
// // console.log(s1); // it will return an empty set {}

// // //realworld useage remove duplicate emails from a list of emails
// // const emails = ["@gmail.com" , "@yahoo.com" , "@gmail.com" , "@hotmail.com" , "@yahoo.com"] ;
// // // const uniqueEmails = new Set(emails);
// // // console.log(uniqueEmails); // it will return a set with the unique emails {@gmail.com , @yahoo.com , @hotmail.com}  
// // // const uniqueEmailArray = [...uniqueEmails]; // it will convert the set back to an array
// // // console.log(uniqueEmailArray); // it will return an array with the unique emails ["@gmail.com" , "@yahoo.com" , "@hotmail.com"]

// // const s = new Set(emails); // it will create a set with the unique emails

// // for(let email of s) { // it will iterate through the set and print each email
// //     console.log(email);
// // }

// //Map datastructure : a map is a collection of key-value pairs where each key is unique and maps to a single value. It is implemented using a hash table and it provides constant time complexity for adding, deleting and searching for elements. It is used to store data in a structured way and to perform operations like adding, deleting and searching for elements based on the key. It is also used to store data that needs to be accessed quickly based on the key.

// const m1 = new Map([
//     ["navin" , 25],
//     ["sachin" , 30],
//     ["rohit" , 28],
//     [true , 11],
//     [[23 , 4, 4] , "Navin"]

// ])

// console.log(m1); // it will return a map with the key-value pairs
// console.log(m1.get("navin")); // it will return the value associated with the key "navin" which is 25

// console.log(m1.has("sachin")); // it will return true because the key "sachin" is present in the map
// console.log(m1.has("virat")); // it will return false because the key "virat" is not present in the map

