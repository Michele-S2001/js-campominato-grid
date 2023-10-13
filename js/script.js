// ->->-> CAMPO MINATO <-<-<-

// recupero gli elementi dal DOM
const fieldDOMElement = document.querySelector('.field');
const btnDOMElement = document.getElementById('btn');

// ascolto l'evento click sul bottone per triggerare l'invocazione di una funzione
btnDOMElement.addEventListener('click', gameStart);

function gameStart () {
  
  // un reset precauzionale
  fieldDOMElement.innerHTML = '';

  // loop per generare gli elementi in pagina
  for (let i = 0; i < 100; i++) {
    const n = i + 1;
    
    const cellDOMElement = document.createElement('div');
    cellDOMElement.classList.add('cell');
    cellDOMElement.innerHTML = n;
    
    fieldDOMElement.append(cellDOMElement);
  }

  // prendo tutti gli elementi ".cell"
  const cellsDOMElements = document.querySelectorAll('.cell')
  
  // applicare un eventlistener ad ognuna di esse
  for (let i = 0; i < 100; i++) {
    let currentCell = cellsDOMElements[i];
    currentCell.addEventListener('click', cellSelected);
  }

}

function cellSelected () {
  this.classList.add('cell-selected');
  console.log(this.innerHTML);
}