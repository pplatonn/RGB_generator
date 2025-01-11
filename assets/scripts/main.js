"use strict"

const colorBox = document.getElementById("colorBox");
const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");

const redSpan = document.getElementById("redSpan");
const greenSpan = document.getElementById("greenSpan");
const blueSpan = document.getElementById("blueSpan");

redRange.addEventListener("input", redUpdateFunc)
greenRange.addEventListener("input", greenUpdateFunc)
blueRange.addEventListener("input", blueUpdateFunc)


function redUpdateFunc() {
    redSpan.textContent = redRange.value;
    colorBox.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`
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