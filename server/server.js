// setting up server
const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser')
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}))

// server on
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

//global variables to be used
let calculationHistory = [];
let calculationResult;

app.post('/calculate', (req, res) => {
    let newCalculationData = req.body;

    console.log(newCalculationData);
    
    let operator = newCalculationData.operator;
    
    let numberOne = Number(newCalculationData.numberOne);
    let numberTwo = Number(newCalculationData.numberTwo);

    if (operator === '+'){
        calculationResult = numberOne + numberTwo;
        console.log(calculationResult);
    } else if (operator === '-'){
        calculationResult = numberOne - numberTwo;
        console.log(calculationResult);
    } else if (operator === '*'){
        calculationResult = numberOne * numberTwo;
        console.log(calculationResult);
    } else if (operator === '/'){
        calculationResult = numberOne / numberTwo;
        console.log(calculationResult);
    } else {
        return;
    }

    newCalculationSet = {
        numberOne: numberOne,
        operator: operator,
        numberTwo: numberTwo,
        answer: Number(calculationResult)
    }
    
    calculationHistory.push(newCalculationSet);
});

app.get('/history', (req, res) => {
    res.send(calculationHistory);
})