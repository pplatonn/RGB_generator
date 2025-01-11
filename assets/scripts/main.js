"use strict"

// store all necessary elements in variables
// we need the div with visual color, inpits for tracking
// changes and spans just to show what value we have (for user)

const colorBox = document.getElementById("colorBox");
const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");

const redSpan = document.getElementById("redSpan");
const greenSpan = document.getElementById("greenSpan");
const blueSpan = document.getElementById("blueSpan");

// next add some event listeners to check if inputs were updated
// and if yes, call appropriate functions

redRange.addEventListener("input", redUpdateFunc)
greenRange.addEventListener("input", greenUpdateFunc)
blueRange.addEventListener("input", blueUpdateFunc)

// any of these functions work with logic:
// 1. change value of span with input's value
// 2. update bg color of colorbox (that div) with template string expression (inputs' values as RR GG BB)

function redUpdateFunc() {
    redSpan.textContent = redRange.value;
    colorBox.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`
}

function greenUpdateFunc() {
    greenSpan.textContent = greenRange.value
    colorBox.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`
}

function blueUpdateFunc() {
    blueSpan.textContent = blueRange.value
    colorBox.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`
}