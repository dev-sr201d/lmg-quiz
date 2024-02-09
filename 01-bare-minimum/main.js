"use strict";

window.addEventListener("DOMContentLoaded", init);

let questions = ["Welche Farbe hat der Himmel?", "Wie nennt man gefrorenes Wasser?", "Was nennt man auch die fünfte Jahrezeit?"];

let correctAnswers = ["blau", "Eis", "Karneval"];

let score = 0;

function init() {
    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i]);
        if (isCorrectAnswer(i, userAnswer)) {
            score += 1;
            alert("Richtig!");
        } else {
          alert("Leider falsch. Die richtige Antwort ist: " + correctAnswers[i]);  
        }
    }

    alert("Richtige Antworten: " + score);
}


function isCorrectAnswer(questionIndex, userAnswer) {
    if (correctAnswers[questionIndex].trim().toUpperCase() === userAnswer.trim().toUpperCase()) {
        return true;
    }

    return false;
}
