document.getElementById('Form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultBox = document.getElementById('resultBox');

    if (weight > 0 && heightCm > 0) {
        const heightMeters = heightCm / 100;
        const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);
        
        let category = "";
        let alertClass = "";

        // Determine Bootstrap classes based on the result
        if (bmi < 18.5) {
            category = "Weight loss (thinness)";
            alertClass = "warning-color";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "A healthy, normal weight";
            alertClass = "success-color";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Weight gain";
            alertClass = "warning-color";
        } else {
            category = "Morbid obesity";
            alertClass = "danger-color";
        }

        // Show result
        resultBox.className = "alert " + alertClass;
        resultBox.innerHTML = `Your body mass index is: <strong>${bmi}</strong> <br> the condition: ${category}`;
        resultBox.style.display = "block";
    }
});