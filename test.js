function calculateAge() {
    const fnameInput = document.getElementById('fname');
    const sexInput = document.getElementById('sex');
    const byrInput = document.getElementById('byr');
    const currDateInput = document.getElementById('currDate');
    const answerH1 = document.getElementById('answer');

    const birthDate = new Date(byrInput.value);
    const currentDate = new Date(currDateInput.value);

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0) {
        years--;
        months = 12 + months;
    }
    if (days < 0) {
        months--;
        days = 30 + days; // assuming 30 days in a month
    }

    let title = '';
    let fullName = fnameInput.value;

    if (sexInput.value.toUpperCase() === 'M') {
        title = 'Mr.';
    } else if (sexInput.value.toUpperCase() === 'F') {
        title = 'Ms.';
    }

    const sex = title + ' ' + fullName;

    let ageString = `${sex}, you are currently `;
    ageString += `${days} days, `;
    ageString += `${months} months, and `;
    ageString += `${years} years old.`;

    // Add typing effect
    let i = 0;
    let typingInterval = setInterval(() => {
        answerH1.innerText = ageString.substring(0, i);
        i++;
        if (i > ageString.length) {
            clearInterval(typingInterval);
        }
    }, 50); // adjust the speed of the typing effect
}