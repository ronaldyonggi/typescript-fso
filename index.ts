import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const queryHeight = req.query.height;
    const queryWeight = req.query.weight;

    if (!queryHeight || !queryWeight) {
        res.status(400).json({error: "missing parameters"});
    }else if (isNaN(Number(queryHeight)) || isNaN(Number(queryWeight))) {
        res.status(400).json({ error: "malformatted parameters"});
    } else {
        const height = Number(queryHeight);
        const weight = Number(queryWeight);
        const bmi = calculateBmi(height, weight);
        res.json({
            height, weight, bmi
        });
    }
});

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { daily_exercises, target } = req.body;

    if (!daily_exercises || isNaN(Number(target))) {
        return res.status(400).send({ error: 'malformatted parameters'});
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(Number(target), daily_exercises);
    return res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});