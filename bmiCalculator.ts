const calculateBmi = ( height: number, weight: number): String => {
    const heightInM = height / 100
    const bmi = weight / (heightInM ** 2)
    if (bmi < 18.5) {
        return 'Underweight'
    } else if (18.5 <= bmi && bmi <= 24.9 ) {
        return 'Normal weight'
    } else if (25 <= bmi && bmi <= 29.9 ) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}

console.log(calculateBmi(180, 74))