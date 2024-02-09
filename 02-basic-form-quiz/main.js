"use strict";

window.addEventListener("DOMContentLoaded", init);

let questions = ["Welche Farbe hat der Himmel?", "Wie nennt man gefrorenes Wasser?", "Was nennt man auch die fünfte Jahrezeit?"];

let correctAnswers = ["blau", "Eis", "Karneval"];

let score = 0;

function init() {
    let button = document.querySelector("#quizButton");
    button.addEventListener("click", checkAnswer);

}

function checkAnswer(event) {
    event.preventDefault();
}

function isCorrectAnswer(questionIndex, userAnswer) {
    if (correctAnswers[questionIndex].trim().toUpperCase() === userAnswer.trim().toUpperCase()) {
        return true;
    }

    return false;
}
