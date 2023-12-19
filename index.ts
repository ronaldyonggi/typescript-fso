import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

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

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});