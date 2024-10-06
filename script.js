const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    // Calculate age (you'll need to implement the logic here)
    let age = today.getFullYear() - birthdate.getFullYear();

    // Display the calculated age
    resultDiv.textContent = `Your age is: ${age}`;
});