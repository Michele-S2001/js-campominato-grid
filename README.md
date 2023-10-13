# Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### Pseudo - code
- Recupero l'elemento in cui andrò a generare la griglia di gioco
- Recupero l'elemento bottone

- Ascolto l'evento "click" sul bottone per eseguire una funzione "gameStart"

- sviluppo la funzione "gameStart":
  - la funzione dovrà sviluppare una sola griglia di partenza, ricliccando il pulsante la griglia si resetterà 
  - dunque, per evitare la formazione di più griglie, al click qualunque cosa ci sia sarà resettato con .innerHTML = '';

  - devo creare un loop che mi permetta di generare 100 elementi html all'interno del campo di gioco
  - creo l'elemento con classe ".cell"
  - lo appendo al field

  - devo poter colorare ogni cella al click:
    - devo prendere tutte le celle generate
    - applicare un eventlistener a tutte le celle con un altro loop 
    - far in modo che gli venga aggiunta la classe ".cell-selected" al click e stampi in console il numero della cella corrispondente
      - lo farò con una funzione dedicata
