interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (hours: number[], target: number): Result => {
    const periodLength = hours.length
    const trainingDays = hours.reduce((acc, curr) => curr === 0 ? acc + 0 : acc + 1, 0)
    const average = (hours.reduce((acc, curr) => acc + curr, 0 )) / periodLength
    const difference = average - target

    let rating
    if (difference > 3) {
        rating = 3
    } else if (difference > 1) {
        rating = 2
    } else {
        rating = 1
    }

    const success = rating > 1

    let ratingDescription
    switch (rating) {
        case 3:
            ratingDescription = 'Awesome! Keep it up!'
            break;
        case 2:
            ratingDescription = 'Good enough'
            break;
        default:
            ratingDescription = "Hopeless"
            break;
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }

}


const input = [3, 0, 2, 4.5, 0, 3, 1]
const target = 2
console.log(calculateExercises(input, target))
