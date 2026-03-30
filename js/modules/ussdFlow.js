// ussdFlow.js

// Simplified USSD flow for pilot
// This JS module handles the flow for farmer posts, transporter picks up, and buyer confirms with standing orders support.

class USSDFlow {
    constructor() {
        this.state = 'initial';
    }

    farmerPost(data) {
        this.state = 'farmerPost';
        return `Farmer has posted: ${data}`;
    }

    transporterPickup(data) {
        if (this.state === 'farmerPost') {
            this.state = 'transporterPickup';
            return `Transporter picked up the item: ${data}`;
        }
        return 'Error: Invalid state transition.';
    }

    buyerConfirm(orderId) {
        if (this.state === 'transporterPickup') {
            this.state = 'buyerConfirm';
            return `Buyer confirmed order ID: ${orderId}`;
        }
        return 'Error: Invalid state transition.';
    }

    standingOrdersSupport(orderDetails) {
        // Logic for handling standing orders support
        return `Standing order set for: ${orderDetails}`;
    }
}

module.exports = USSDFlow;