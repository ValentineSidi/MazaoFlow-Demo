// USSDFlow.js

// This code demonstrates a complete farm-to-buyer transaction flow using a hypothetical USSD application.

function start() {
    console.log("Welcome to MazaoFlow! Select your role:");
    console.log("1. Farmer");
    console.log("2. Transporter");
    console.log("3. Buyer");
}

function farmerMenu() {
    console.log("Farmer Menu:");
    console.log("1. List Produce");
    console.log("2. View Orders");
    console.log("3. Exit");
}

function listProduce() {
    console.log("Listing Produce:");
    // Simulated produce listing
    const produce = ["Tomatoes", "Onions", "Potatoes"];  
    produce.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
    console.log("Select an item to sell:");
}

function transporterMenu() {
    console.log("Transporter Menu:");
    console.log("1. Accept Job");
    console.log("2. View Active Deliveries");
    console.log("3. Exit");
}

function acceptJob() {
    console.log("Accepting Job:");
    // Simulated job acceptance process
    console.log("Job accepted! Proceed to pick up the produce.");
}

function buyerMenu() {
    console.log("Buyer Menu:");
    console.log("1. Confirm Delivery");
    console.log("2. Rate Transporter");
    console.log("3. Exit");
}

function confirmDelivery() {
    console.log("Confirming Delivery:");
    console.log("Delivery confirmed! Thank you for using MazaoFlow.");
}

// Example flow
start();
farmerMenu();
listProduce();
transporterMenu();
acceptJob();
buyerMenu();
confirmDelivery();