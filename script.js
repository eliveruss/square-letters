"use strict";

// MAIN VARIABLES //////////////////////////////////////////////////////////

const input = document.querySelector(".menu__input");
const numOfLetters = document.querySelector(".menu__number");
const btn = document.querySelector(".menu__btn");
const container = document.querySelector(".squares__container");
const square = document.querySelectorAll(".squares__square");

// LETTERS /////////////////////////////////////////////////////////////////

const squares = [];

///// SHAPES
const letters = {
    A: [
      0, 0, 1, 0, 0,
      0, 1, 0, 1, 0,
      1, 1, 1, 1, 1,
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
    ],
    B: [
      0, 1, 1, 0, 0,
      0, 1, 0, 1, 0,
      0, 1, 1, 0, 0,
      0, 1, 0, 1, 0,
      0, 1, 1, 1, 0,
    ],
    C: [
      0, 1, 1, 1, 0,
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
      0, 1, 1, 1, 0,
    ],
    D: [
      1, 1, 1, 0, 0,
      1, 0, 0, 1, 0,
      1, 0, 0, 1, 0,
      1, 0, 0, 1, 0,
      1, 1, 1, 0, 0,
    ],
    E: [
      1, 1, 1, 1, 0,
      1, 0, 0, 0, 0,
      1, 1, 1, 0, 0,
      1, 0, 0, 0, 0,
      1, 1, 1, 1, 0,
    ],
    F: [
      1, 1, 1, 1, 0,
      1, 0, 0, 0, 0,
      1, 1, 1, 0, 0,
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
    ],
    G: [
      0, 1, 1, 1, 0,
      1, 0, 0, 0, 0,
      1, 0, 1, 1, 0,
      1, 0, 0, 1, 0,
      0, 1, 1, 1, 0,
    ],
    H: [
      1, 0, 0, 1, 0,
      1, 0, 0, 1, 0,
      1, 1, 1, 1, 0,
      1, 0, 0, 1, 0,
      1, 0, 0, 1, 0,
    ],
    I: [
      1, 1, 1, 1, 1,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      1, 1, 1, 1, 1,
    ],
    J: [
      0, 1, 1, 1, 0,
      0, 0, 0, 1, 0,
      0, 0, 0, 1, 0,
      0, 1, 0, 1, 0,
      0, 1, 1, 1, 0,
    ],
    K: [
      1, 0, 0, 1, 0,
      1, 0, 1, 0, 0,
      1, 1, 0, 0, 0,
      1, 0, 1, 0, 0,
      1, 0, 0, 1, 0,
    ],
    L: [
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
      1, 1, 1, 1, 0,
    ],
    M: [
      1, 0, 0, 0, 1,
      1, 1, 0, 1, 1,
      1, 0, 1, 0, 1,
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
    ],
    N: [
      1, 0, 0, 0, 1,
      1, 1, 0, 0, 1,
      1, 0, 1, 0, 1,
      1, 0, 0, 1, 1,
      1, 0, 0, 0, 1,
    ],
    O: [
      0, 1, 1, 1, 0,
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
      0, 1, 1, 1, 0,
    ],
    P: [
      1, 1, 1, 0, 0,
      1, 0, 1, 1, 0,
      1, 1, 1, 0, 0,
      1, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
    ],
    Q: [
      0, 1, 1, 1, 0,
      1, 0, 0, 0, 1,
      1, 0, 1, 0, 1,
      1, 0, 0, 1, 1,
      0, 1, 1, 1, 1,
    ],
    R: [
      1, 1, 1, 0, 0,
      1, 0, 1, 1, 0,
      1, 1, 1, 0, 0,
      1, 0, 1, 0, 0,
      1, 0, 0, 1, 0,
    ],
    S: [
      0, 1, 1, 1, 0,
      1, 0, 0, 0, 0,
      0, 1, 1, 1, 0,
      0, 0, 0, 0, 1,
      1, 1, 1, 1, 0,
    ],
    T: [
      1, 1, 1, 1, 1,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
    ],
    U: [
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
      0, 1, 1, 1, 0,
    ],
    V: [
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
      0, 1, 0, 1, 0,
      0, 0, 1, 0, 0,
    ],
    W: [
      1, 0, 0, 0, 1,
      1, 0, 0, 0, 1,
      1, 0, 1, 0, 1,
      1, 1, 0, 1, 1,
      1, 0, 0, 0, 1,
    ],
    X: [
      1, 0, 0, 0, 1,
      0, 1, 0, 1, 0,
      0, 0, 1, 0, 0,
      0, 1, 0, 1, 0,
      1, 0, 0, 0, 1,
    ],
    Y: [
      1, 0, 0, 0, 1,
      0, 1, 0, 1, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
    ],
    Z: [
      1, 1, 1, 1, 1,
      0, 0, 0, 1, 0,
      0, 0, 1, 0, 0,
      0, 1, 0, 0, 0,
      1, 1, 1, 1, 1,
    ],
  };

// COUNTING LETTERS AND ADDING SQUARES /////////////////////////////////////

let letterCount;
const setLetterCount = (count) => {
    letterCount = count;
    container.style.setProperty("--js-column-count", letterCount); 
    // Changing grid in CSS
  
    squares.length = 0; 
  
    container.innerHTML = ""; 
// Creating squares
    for (let i = 0; i < 5 ** 2 * letterCount; i++) {
      const cell = document.createElement("div");
      squares.push(cell);
      container.appendChild(cell);
      cell.classList.add("squares__square");
    }
  };

// Slicing input
const onInput = (inputEvent) => {
    input.value = input.value.slice(-letterCount);
    updateScreen(input.value.toUpperCase());
};

const updateScreen = (currentLetters) => {
    let rowIndex;
    let cellInLetterIndex;
    let currentLetter;
    // Dividing by 5, because every letter is made by squares (5x5), so it's width is 5 squares
    for (const i in squares) {
        const letterIndex = Math.floor(i / 5) % letterCount;
        if (letterIndex >= currentLetters.length) {
            continue;  
        }
        rowIndex = Math.floor(i / 5 / letterCount);
        cellInLetterIndex = rowIndex * 5 + (i % 5);

        currentLetter = currentLetters[letterIndex];
        // Changing squares color (displaying letters)
        squares[i].classList.toggle("active", !!letters[currentLetter][cellInLetterIndex]); 
        }
};

// GETTING VALUE FROM INPUT WITH NUMBER OF LETTERS //////////////////////////

let count;
const getLetterCount = () => {
    count = parseInt(numOfLetters.value, 10);
    if (count > 0 && count < 10) {
    setLetterCount(count);
    updateScreen(input.value.toUpperCase());
  }};
  
  input.addEventListener("input", onInput);
  numOfLetters.addEventListener("input", getLetterCount);
  
 getLetterCount();

// CLEARING BUTTON /////////////////////////////////////////////////////////

 const clearAll = function () {
    numOfLetters.value = "";
    input.value = "";

    squares.forEach((cell) => {
      cell.classList.remove("active");
    });
  };
  
  btn.addEventListener("click", clearAll);
