// demo controller

function createGreenButton() {
    const button = document.createElement('button');
    button.textContent = 'Start USSD Flow';
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.style.padding = '10px 20px';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    button.addEventListener('click', function() {
        startUSSDFlow();
    });

    document.body.appendChild(button);
}

function startUSSDFlow() {
    console.log('Farmer posting...');
    // Simulate farmer posting
    setTimeout(() => {
        console.log('Transporter accepting...');
        // Simulate transporter accepting
        setTimeout(() => {
            console.log('Buyer confirming delivery...');
            // Simulate buyer confirming delivery
        }, 2000);
    }, 2000);
}

createGreenButton();