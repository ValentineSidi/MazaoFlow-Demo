// Utility functions for MazaoFlow-Demo

// Function to create a star SVG element
function starSVG() {
    return `<svg xmlns=2http://www.w3.org/2000/svg2 viewBox=20 0 20 202>
                <polygon points=210,1 12,18 1,7 19,7 8,182 fill=2gold2 />
            </svg>`;
}

// Function to generate HTML for a given number of stars
function starsHTML(count) {
    let stars = '';
    for (let i = 0; i < count; i++) {
        stars += starSVG();
    }
    return stars;
}

// Function to calculate total cost
function tcost(prices) {
    return prices.reduce((total, price) => total + price, 0);
}

// Function to calculate days since a given date
function daysSince(date) {
    const currentDate = new Date();
    const pastDate = new Date(date);
    const difference = currentDate - pastDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24));
}

// Toast notification system
function showToast(message) {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.className = 'toast';
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('fade');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Styling for toast notifications (can be added to a CSS file)
const style = document.createElement('style');
style.innerHTML = `
    .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        border-radius: 5px;
        padding: 10px;
        z-index: 9999;
    }
    .toast.fade {
        opacity: 0;
        transition: opacity 0.3s;
    }
`;
document.head.appendChild(style);
