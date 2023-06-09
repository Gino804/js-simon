# Simon Says

## Traccia:

Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

### BONUS:

- Mostriamo il countdown dei 30 secondi in pagina
- Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt

## Steps:

- Recupero gli elementi dal DOM
- Inserisco in pagina 5 numeri casuali diversi tra loro
- Creo una variabile per i secondi e la inizializzo a 30
- **OGNI** secondo
  - Stampo in console il secondo corrente
  - Decremento i secondi di 1
  - **SE** i secondi sono arrivati a 0
    - Fermo il timer
- **DOPO** 30 secondi
  - Faccio scomparire i numeri dalla pagina
  - Chiedo all'utente di inserire i numeri che ha visto
  - Comunico all'utente quanti e quali numeri ha indovinato
