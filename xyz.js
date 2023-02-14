const prompt = require("prompt-sync")();
let User = prompt("Sissor: S , Paper: P , Rock: R ")
let computer = Math.floor(Math.random() * 3)
let Cpu = ("s", "p", "r")(computer)