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

    console.log(`${orderDetail.cost} Payment of order is in progress`);

    setTimeout(() => {

        console.log("Payment is received -> Order placed successfully");

        orderDetail.status = true;

        callback(orderDetail);

    }, 3000);
}


// ==========================================
// 2. PREPARING ORDER
// ==========================================

function preparingOrder(orderDetail, callback) {

    console.log("Your food preparation is started ....");

    setTimeout(() => {

        console.log("Your food is prepared and ready to serve");

        callback();

    }, 3000);
}


// ==========================================
// 3. PICKUP ORDER
// ==========================================

function pickupOrder(callback) {

    console.log("Delivery boy is on the way to pickup the order ..");

    setTimeout(() => {

        console.log(
            "Delivery boy has picked up the order and on the way to deliver"
        );

        callback();

    }, 3000);
}


// ==========================================
// 4. DELIVER ORDER
// ==========================================

function deliverOrder() {

    console.log("I am on my way to deliver the order..");

    setTimeout(() => {

        console.log("Order delivered Successfully.....");

    }, 3000);
}


// ==========================================
// CALLBACK HELL
// ==========================================

placeOrder(orderDetail, (orderDetail) => {

    preparingOrder(orderDetail, () => {

        pickupOrder(() => {

            deliverOrder();

        });

    });

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