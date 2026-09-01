
const orderDetail = { 
    orderId: 123123, 
    food: ["Pizza", "Biryani", "Paratha"], 
    cost: 300, 
    customer_name: "Navin", 
    customer_location: "Sangli", 
    resturant_location: "Sangli" 
}; 
 
 
// ========================================== 
// 1. PLACE ORDER 
// ========================================== 
 
function placeOrder(orderDetail, callback) { 
 
    return new Promise((resolve, reject) => {

        console.log(`${orderDetail.cost} Payment of order is in progress`); 
 
        setTimeout(() => { 
 
            console.log("Payment is received -> Order placed successfully"); 
 
            orderDetail.status = true; 
            
            resolve(orderDetail);
 
 
        }, 3000); 
    });
} 
 
 
// ========================================== 
// 2. PREPARING ORDER 
// ========================================== 
 
function preparingOrder(orderDetail, callback) { 
 
    return new Promise((resolve, reject) => {

        console.log("Your food preparation is started ...."); 
 
        setTimeout(() => { 
 
            console.log("Your food is prepared and ready to serve"); 

            resolve(orderDetail);
 
 
        }, 3000); 
    });
} 
 
 
// ========================================== 
// 3. PICKUP ORDER 
// ========================================== 
 
function pickupOrder(orderDetail, callback) { 
 
    return new Promise((resolve, reject) => {

        console.log("Delivery boy is on the way to pickup the order .."); 
 
        setTimeout(() => { 
 
            console.log( 
                "Delivery boy has picked up the order and on the way to deliver" 
            ); 

            resolve(orderDetail);
 
         
 
        }, 3000); 
    });
} 
 
 
// ========================================== 
// 4. DELIVER ORDER 
// ========================================== 
 
function deliverOrder(orderDetail) { 
 
    return new Promise((resolve, reject) => {

        console.log("I am on my way to deliver the order.."); 
 
        setTimeout(() => { 
 
            console.log("Order delivered Successfully....."); 

            resolve(orderDetail);
 
        }, 3000); 
    });
} 
 
 
// ========================================== 
// CALLBACK HELL 
// ========================================== 
 
// placeOrder(orderDetail, (orderDetail) => { 
 
//     preparingOrder(orderDetail, () => { 
 
//         pickupOrder(() => { 
 
//             deliverOrder(); 
 
//         }); 
 
//     }); 
 
// }); 
 
 
// ========================================== 
// DEFINITION 
// ========================================== 
 
// Callback Hell is a situation where we have 
// multiple nested callbacks. 
// 
// It makes the code: 
// 1. Hard to read 
// 2. Hard to understand 
// 3. Hard to maintain 
// 4. Difficult to debug 
// 
// This nested structure is also called 
// "Pyramid of Doom". 
 
 
placeOrder(orderDetail) 
.then((orderDetail) => preparingOrder(orderDetail)) 
.then((orderDetail) => pickupOrder(orderDetail)) 
.then((orderDetail) => deliverOrder(orderDetail)) 
.then((orderDetail) => {
    console.log("Final Order Details:", orderDetail);
})
.catch((error) => {
    console.log("Something went wrong:", error);
});




// ==========================================
// DEFINITION
// ==========================================

// Callback Hell is a situation where we have
// multiple nested callbacks.
//
// It makes the code:
// 1. Hard to read
// 2. Hard to understand
// 3. Hard to maintain
// 4. Difficult to debug
//
// This nested structure is also called
// "Pyramid of Doom".


// placeOrder(orderDetail)
// .then((orderDetail) => preparingOrder(orderDetail))
// .then((orderDetail) => pickupOrder(orderDetail))
// // preparingOrder(orderDetail)
// // pickupOrder(orderDetail)
// // deliverOrder(orderDetail)


async function order(){

    try{
   const response1 = await placeOrder(orderDetail)

   const response2 = await preparingOrder(response1)
   
   const response3 = await preparingOrder(response2)

   const response4 = await deliverOrder(response3)

   console.log(response4)
    }

    catch(error){
     console.log("Error" , error)
    }
    


}
