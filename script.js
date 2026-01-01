document.getElementById('calorie-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const sex = document.querySelector('input[name="sex"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.querySelector('input[name="goal"]:checked').value;

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    let bmr;
    if (sex === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activity;

    let dailyCalories;
    switch (goal) {
        case 'loss':
            dailyCalories = tdee - 500;
            break;
        case 'gain':
            dailyCalories = tdee + 500;
            break;
        case 'maintain':
        default:
            dailyCalories = tdee;
            break;
    }

    const resultDiv = document.getElementById('result');
    const calorieResult = document.getElementById('calorie-result');

    calorieResult.textContent = `${Math.round(dailyCalories)} kcal/day`;
    resultDiv.classList.remove('hidden');
});
