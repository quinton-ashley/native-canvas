require("../dist");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 150;

ctx.lineWidth = 5;

ctx.clearRect(0, 0, 400, 400);
ctx.beginPath();
ctx.arc(40, 40, 40, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();
