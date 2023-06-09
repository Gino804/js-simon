console.log('JS OK');

// Recupero gli elementi dal DOM

const numbersPlaceholder = document.getElementById('numbers');
console.log(numbersPlaceholder);

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
const timer = setInterval(function(){

    // Stampo in console il secondo corrente
    console.log(seconds);

    // Decremento i secondi
    seconds--;

    // Se i secondi sono arrivati a 0, fermo il timer
    if(seconds === 0) clearInterval(timer);
}, 1000)

// Dopo 30 secondi
setTimeout(function(){

    // Faccio scomparire i numeri dalla pagina
    numbersPlaceholder.classList.add('d-none');

    // Postpongo di 1 millisecondo i prompt e l'alert altrimenti vengono eseguiti prima della scomparsa dei numeri
    setTimeout(function(){
        // Chiedo all'utente di inserire i numeri che ha visto
        const rightNumbers = [];
        for(let i = 0; i < 5; i++)
        {
            const userGuess = parseInt(prompt('Inserisci un numero tra 1 e 99'));
            if(numbers.includes(userGuess)) rightNumbers.push(userGuess);
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
    }, 1)
}, 30000)