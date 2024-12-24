const manRating = document.getElementById('manRating');
const manRatingValue = document.getElementById('manRatingValue');
manRating.addEventListener('input', () => {
    manRatingValue.textContent = manRating.value;
});

function calculateDowry() {
    const manAge = parseInt(document.getElementById('manAge').value);
    const manSalary = parseInt(document.getElementById('manSalary').value);
    const womanAge = parseInt(document.getElementById('womanAge').value);
    const manProfession = document.getElementById('manProfession').value;
    const womanProfession = document.getElementById('womanProfession').value;

    let dowry = "";

    // Check if marriage is allowed
    if (manAge < 21 || womanAge < 18) {
        const popup = document.getElementById('popup');
        const popupText = document.getElementById('popupText');
        popupText.textContent = "Marriage not allowed";
        popup.style.display = 'block';
        return; // Stop further execution
    }

    // Dowry calculations based on salary
    if (manSalary <= 25000) {
        dowry = "No dowry";
    } else if (manSalary > 25000 && manSalary <= 40000) {
        dowry = "Splender bike, 2 lakh cash, bed, water filter, fan";
    } else if (manSalary > 40000 && manSalary <= 60000) {
        dowry = "TVS Raider bike, 5 lakh cash, fridge, TV, bed, washing machine";
    } else if (manSalary > 60000 && manSalary <= 80000) {
        dowry = "Apache bike, 7 lakh cash, fridge, TV, AC, washing machine, microwave";
    } else if (manSalary > 80000 && manSalary <= 100000) {
        dowry = "Hyundai Creta, 10 lakh cash, fridge, TV, AC, washing machine, dishwasher, home theater";
    } else if (manSalary > 100000 && manSalary <= 150000) {
        dowry = "BMW X1, 15 lakh cash, fridge, TV, AC, washing machine, dishwasher, home theater, gym equipment ,etc";
    } else if (manSalary > 150000 && manSalary <= 200000) {
        dowry = "Audi A4, 20 lakh cash, fridge, TV, AC, washing machine, dishwasher, home theater, gym equipment, etc";
    } else if (manSalary > 200000) {
        dowry = "Fortuner, 25 lakh cash, fridge, TV, AC, washing machine, dishwasher, home theater, gym equipment, luxury watch etc";
    }

    // Age-based adjustments
    if (manAge >= 30 && manSalary <= 50000) {
        dowry = "TVS Raider bike, 5 lakh cash, fridge, TV, bed, washing machine";
    }

    if (womanAge >= 30 && manSalary <= 50000) {
        dowry = "No dowry get lost";
    }

    // Display result in popup
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    popupText.textContent = dowry;
    popup.style.display = 'block';

    // Splash balloons if dowry is received
    if (dowry !== "No dowry") {
        splashBalloons();
    }
}

function splashBalloons() {
    const popup = document.getElementById('popup');
    const popupRect = popup.getBoundingClientRect();
    const popupCenterX = popupRect.left + popupRect.width / 2;
    const popupCenterY = popupRect.top + popupRect.height / 2;

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${popupCenterX + getRandomOffset()}px`;
        balloon.style.top = `${popupCenterY + getRandomOffset()}px`;
        balloon.style.backgroundColor = getRandomColor();

        document.body.appendChild(balloon);

        // Remove balloon after animation
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
}

function getRandomOffset() {
    return Math.floor(Math.random() * 100 - 50); // Random offset between -50 and 50
}

function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
}


function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}