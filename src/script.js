let board = [[]]; // game board representation
let currentPlayer = "X";

let smallCells = document.querySelectorAll('.smallCell');
let largeCells = document.querySelectorAll('.largeCell');

function checkSmallWin(){

}

function checkLargeWin(){

}

function checkDraw(){

}

function switchPlayers(){
    if(currentPlayer == "X"){
        currentPlayer == "O";
    }
    if(currentPlayer == "O"){
        currentPlayer == "X";
    }
}