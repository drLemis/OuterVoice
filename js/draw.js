'use strict';

const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

var xOffset = 0;
var hZ = 0;
var freqsAsText = [];

var playerXOffset = 0;
var playerHZ = 0;
var playerFreqsAsText = [];

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.requestAnimationFrame(draw);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSine();
    drawPlayerSine();
    drawPlayerButtons();

    window.requestAnimationFrame(draw);
}

function pushFreqToText(freq) {
    freqsAsText.push(freq);
}

function dropFreqToText() {
    freqsAsText = [];
}

function setHz(hZNew) {
    hZ = hZNew;
}

function setPlayerHz(hZNew) {
    playerhZ = hZNew;
}


function drawSine() {
    var width = canvas.width;
    var height = canvas.height / 6;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(146,146,146)";

    var x = width * 0.33;
    var y = canvas.height;
    var amplitude = height;
    var frequency = 1 / hZ;
    if (hZ == 0) {
        var test = 1760 + +Date.now().toString().split('').pop() / 1000;
        frequency = 1 / test;
        amplitude = height / 20;
    }

    while (x < width * 0.66) {
        y = height + amplitude * Math.sin((x + xOffset) / frequency);
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();

    xOffset += frequency;

    ctx.fillStyle = "#555555";
    ctx.fillRect(width * (1 / 6), height * 2, width * 0.66, 16);

    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.font = "16px Consolas";
    ctx.fillText(freqsAsText, width * 0.5, height * 2 + 12);
}

function drawPlayerSine() {
    var width = canvas.width;
    var height = canvas.height / 6;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(146,146,146)";

    var x = width * 0.33;
    var y = canvas.height;
    var amplitude = height;
    var frequency = 1 / playerHZ;
    if (playerHZ == 0) {
        var test = 1760 + +Date.now().toString().split('').pop() / 1000;
        frequency = 1 / test;
        amplitude = height / 20;
    }

    while (x < width * 0.66) {
        y = height + amplitude * Math.sin((x + playerXOffset) / frequency) + height * 4;
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();
    ctx.save();

    playerXOffset += frequency;

    ctx.fillStyle = "#555555";
    ctx.fillRect(width * (1 / 6), height * 4 - 16, width * 0.66, 16);

    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.font = "16px Consolas";
    ctx.fillText(playerFreqsAsText, width * 0.5, height * 4 - 4);
}

function drawPlayerButtons() {
    var width = canvas.width;
    var height = canvas.height / 6;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#050505";
    ctx.fillStyle = "rgb(88,88,88)";

    ctx.fillRect(width * (1 / 6), height * 4 + 1, width * (1 / 6) - 16, height / 2);
    ctx.strokeRect(width * (1 / 6), height * 4 + 1, width * (1 / 6) - 16, height / 2);

    ctx.fillRect(width * (1 / 6), height * 4.5 + 1, width * (1 / 6) - 16, height / 2);
    ctx.strokeRect(width * (1 / 6), height * 4.5 + 1, width * (1 / 6) - 16, height / 2);

    ctx.fillRect(width * (1 / 6), height * 5 + 1, width * (1 / 6) - 16, height / 2);
    ctx.strokeRect(width * (1 / 6), height * 5 + 1, width * (1 / 6) - 16, height / 2);

    ctx.fillRect(width * (1 / 6), height * 5.5 + 1, width * (1 / 6) - 16, height / 2);
    ctx.strokeRect(width * (1 / 6), height * 5.5 + 1, width * (1 / 6) - 16, height / 2);


    ctx.fillRect(width * (4 / 6), height * 4 + 1, width * (1 / 6) - 16, height / 2);
    ctx.strokeRect(width * (4 / 6), height * 4 + 1, width * (1 / 6) - 16, height / 2);
    
    ctx.fillRect(width * (4 / 6), height * 5.5 + 1, width * (1 / 6) - 16, height / 2);
    ctx.strokeRect(width * (4 / 6), height * 5.5 + 1, width * (1 / 6) - 16, height / 2);

    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.font = "32px Consolas";

    ctx.fillText("880", width * (1.5 / 6), height * 4.3);
    ctx.fillText("440", width * (1.5 / 6), height * 4.8);
    ctx.fillText("220", width * (1.5 / 6), height * 5.3);
    ctx.fillText("000", width * (1.5 / 6), height * 5.8);
    
    ctx.fillText("SND", width * (4.5 / 6), height * 4.3);
    ctx.fillText("DEL", width * (4.5 / 6), height * 5.8);
}