# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
  - con difficoltà 1 (facile)=> 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
  - con difficoltà 2 (medio)=> 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
  - con difficoltà 3 (difficile)=> 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

## pseudo - code

- recuperare la value della select
  - con una variabile recupero l'elemento select dal dom
  - con un'altra variabile immagazzino la value

- SE l'utente sceglie opzione 1(facile):
  - dovrà generare 49 caselle
  - dovrà cambiare il g-t-c della griglia a 7 colonne
- ALTRIMENTI SE l'utente sceglie l'opzione 2(medio):
  - dovrà generare 81 caselle
  - dovrà cambiare il g-t-c della griglia a 9 colonne
- ALTRIMENTI {
  - dovrà generare 100 caselle
  - dovrà cambiare il g-t-c della griglia a 10 colonne
}

