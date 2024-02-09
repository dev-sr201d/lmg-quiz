"use strict";

window.addEventListener("DOMContentLoaded", init);

let questions = ["Welche Farbe hat der Himmel?", "Wie nennt man gefrorenes Wasser?", "Was nennt man auch die fünfte Jahrezeit?"];

let correctAnswers = ["blau", "Eis", "Karneval"];

let currentQuestionIndex = -1;

let score = 0;

function init() {
    let button = document.querySelector("#quizButton");
    button.addEventListener("click", checkAnswer);

    setScoreBox(score);
    nextQuestion();
}

function setQuestionBox(value) {
    let element = document.querySelector("#quizQuestion");
    element.value = value;
}

function setAnswerBox(value) {
    let element = document.querySelector("#quizAnswer");
    element.value = value;
}

function setMessageBox(value) {
    let element = document.querySelector("#quizMessage");
    element.innerText = value;
}

function setScoreBox(value) {
    let element = document.querySelector("#quizScore");
    element.value = value;
}

function clearForm() {
    setMessageBox("");
    setQuestionBox("");
    setAnswerBox("");
}

function nextQuestion() {
    clearForm();
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        setMessageBox("Das war's. Du hattest " + score + " richtige Antworten.");
        return;
    }

    setQuestionBox(questions[currentQuestionIndex]);
}

function checkAnswer(event) {
    event.preventDefault();

    let answerBox = document.querySelector("#quizAnswer");
    if (isCorrectAnswer(currentQuestionIndex, answerBox.value)) {
        score++;
        setScoreBox(score);
        setMessageBox("Richtig!");
    } else {
        setMessageBox("Leider falsch.");
    }

    window.setTimeout(nextQuestion, 2000);
}

function isCorrectAnswer(questionIndex, userAnswer) {
    if (correctAnswers[questionIndex].trim().toUpperCase() === userAnswer.trim().toUpperCase()) {
        return true;
    }

    return false;
}
