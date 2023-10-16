// ->->-> CAMPO MINATO <-<-<-

// recupero gli elementi dal DOM
const fieldDOMElement = document.querySelector('.field');
const btnDOMElement = document.getElementById('btn');
const selectDOMElement = document.querySelector('#difficulty');

// ascolto l'evento click sul bottone per triggerare l'invocazione di una funzione
btnDOMElement.addEventListener('click', gameStart);

function gameStart () {
  // un reset precauzionale
  fieldDOMElement.innerHTML = '';            
 
  //recupero la value dalla select
  const difSelected = selectDOMElement.value;

  if (difSelected === "1"){    
    fieldDOMElement.style.gridTemplateColumns = "repeat(10, 1fr)";
    cellGenerator(100);
  } else if (difSelected === "2") {
    fieldDOMElement.style.gridTemplateColumns = "repeat(9, 1fr)";
    cellGenerator(81);
  } else {
    fieldDOMElement.style.gridTemplateColumns = "repeat(7, 1fr)";
    cellGenerator(49);
  }
}

function cellSelected () {
  this.classList.add('cell-selected');
  console.log(this.innerHTML);
}

function cellGenerator (numcells) {
  // loop per generare gli elementi in pagina
    for (let i = 0; i < numcells; i++) {
    const n = i + 1;
    const cellDOMElement = document.createElement('div');
    cellDOMElement.classList.add('cell');
    cellDOMElement.innerHTML = n;
    fieldDOMElement.append(cellDOMElement);
  }
  // prendo tutti gli elementi ".cell"
  const cellsDOMElements = document.querySelectorAll('.cell')
      
  // applicare un eventlistener ad ognuna di esse
  for (let i = 0; i < numcells; i++) {
    let currentCell = cellsDOMElements[i];
    currentCell.addEventListener('click', cellSelected);
  }
} 