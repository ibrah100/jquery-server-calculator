$(document).ready(onReady);

function onReady() {
    $('#sumbitButton').on('click', calculate)
    $('#addButton').on('click', addition);
    $('#subtractButton').on('click', subtraction);
    $('#multiplyButton').on('click', multiplication);
    $('#divideButton').on('click', division);
    $('#clearButton').on('click', clear);
}

let operator;

function calculate () {
    
    let numberInputOne = $('#numberOneInput').val();
    let numberInputTwo = $('#numberTwoInput').val();

    let newCalculation = {
        numberOne: numberInputOne,
        operator: operator,
        numberTwo: numberInputTwo,
    }
   
    $.ajax({
        url: '/calculate',
        method: 'POST',
        data: newCalculation
    }).then( (response) =>{
    })

    history();
}

function history () {
    $.ajax({
        url: '/history',
        method: 'GET'
    }).then( (response) => {
        let currentAnswer = response[response.length-1].answer

        $('#calcHistory').empty();
        for ( let i = 0; i < response.length; i++) {
            $('#currentAnswer').text(currentAnswer);
            $('#calcHistory').append(`
            <li>${response[i].numberOne} ${response[i].operator} ${response[i].numberTwo} = ${response[i].answer}</li>
            `)
        }
        
    })
}

function addition () {
    operator = '+';
}

function subtraction () {
    operator = '-';
}

function multiplication () {
    operator = '*';
}

function division () {
    operator = '/';
}

function clear () {
    $('#numberOneInput').val('');
    $('#numberTwoInput').val(''); 
}