// Feature Phone USSD Screen Rendering and Keypad Input Handling Logic

class USSDScreen {
    constructor() {
        this.screenContent = '';
        this.keypadInput = '';
    }

    // Render the USSD screen
    renderScreen() {
        console.log("USSD Screen:");
        console.log(this.screenContent);
    }

    // Handle keypad input
    handleKeypadInput(input) {
        this.keypadInput += input;
        this.screenContent = this.updateScreenContent();
        this.renderScreen();
    }

    // Update screen content based on input
    updateScreenContent() {
        return `You pressed: ${this.keypadInput}`;
    }
}

// Example usage:
const ussdScreen = new USSDScreen();
ussdScreen.handleKeypadInput('1');
ussdScreen.handleKeypadInput('2');
ussdScreen.handleKeypadInput('3');