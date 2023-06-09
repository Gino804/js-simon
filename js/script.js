console.log('JS OK');

// Recupero gli elementi dal DOM

const numbersPlaceholder = document.getElementById('numbers');
console.log(numbersPlaceholder);

const timerPlaceholder = document.getElementById('timer');
console.log(timerPlaceholder);

const guessesElement = document.getElementById('guesses');
console.log(guessesElement);

const guessButton = document.getElementById('guess-button');
console.log(guessButton);

// Inserisco in pagina 5 numeri casuali

const numbers = [];
let randomNumber


// Per 5 volte
for(let i = 0; i < 5; i++)
{
    do
    {
        // Genero un numero casuale da 1 a 99
        randomNumber = Math.floor(Math.random() * 99) + 1;
    }
    while(numbers.includes(randomNumber)); // Controllo che non sia già all'interno dell'array

    // Inserisco il numero nell'array e lo stampo in pagina
    numbers.push(randomNumber);
    numbersPlaceholder.innerText += ` ${randomNumber}`;
}

// Creo il timer
let seconds = 30;
timerPlaceholder.innerText = seconds;
const timer = setInterval(function(){

    // Stampo in pagina il secondo prima di quello corrente
    timerPlaceholder.innerText = --seconds;

    // Se i secondi sono arrivati a 0, fermo il timer
    if(seconds === 0) clearInterval(timer);
}, 1000)

// Dopo 30 secondi
setTimeout(function(){

    // Faccio scomparire i numeri dalla pagina
    numbersPlaceholder.classList.add('d-none');

    // Faccio comparire le caselle di input
    guessesElement.classList.remove('d-none');

    // Al click del bottone
    const rightNumbers = [];
    guessButton.addEventListener('click', function()
    {
        // Recupero tutti gli input dal DOM
        const guesses = document.querySelectorAll('#guesses>input');

        // Per ogni risposta
        for(let i = 0; i < guesses.length; i++)
        {
            let guess = parseInt(guesses[i].value);
            // Se la risposta è tra i numeri estratti, è giusta
            if(numbers.includes(guess)) rightNumbers.push(guess);
        }

        // Comunico all'utente quanti e quali numeri ha indovinato
        let message = 'Non hai indovinato nessun numero';
        if(rightNumbers.length > 0)
        {
            if(rightNumbers.length === 1) message = `Hai indovinato 1 numero: ${rightNumbers[0]}`;
            else
            {
                message = `Hai indovinato ${rightNumbers.length} numeri:`;
                for(let i = 0; i < rightNumbers.length; i++)
                {
                    message += ` ${rightNumbers[i]}`;
                }
            }
        }
        alert(message);
    })
}, 30000)