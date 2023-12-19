interface BmiParameters {
    height: number,
    weight: number
}

interface ExerciseParameter {
    target: number,
    hours: number[]
}

export const parseBmiArguments = (args: string[]): BmiParameters => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    } else {
        throw new Error('Provided value were not numbers!');
    }
};

export const parseExerciseArguments = (args: string[]): ExerciseParameter => {
    if (args.length < 4) throw new Error('Not enough arguments');

    let target;
    // Check for target argument
    if (isNaN(Number(args[2]))) {
        throw new Error('Provided target is not a number!');
    } else {
        target = Number(args[2]);
    }

    const hours: number[] = [];
    // Iterate arguments starting 
    for (let i = 3; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            throw new Error('One of the period length is not a number!');
        } else {
            hours.push(Number(args[i]));
        }
    }

    return {
        target, hours
    };

};