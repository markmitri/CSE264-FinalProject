let board = [[]]; // game board representation
const row = 9; const col = 9;
let currentPlayer = "X";

const box = document.getElementsByClassName("box");

for(let i = 0; i < box.length; i++){
    initializeBoard(row,col);
    box[i].onclick = function(evt){
        var buttonId = evt.target.id;
        console.log("Button ", buttonId, " Clicked!");
        var button = document.getElementById(buttonId);
        // Create a new text node
        var textNode = document.createTextNode(currentPlayer);
        var charArray = buttonId.split(""); // Convert string to array of characters
        var first = charArray[0]; // Access the first element of the array
        var second = charArray[1]; // Access the second element of the array
        arr[first][second] = currentPlayer;
        printBoard(arr);
        // Replace the button with the text node
        button.parentNode.replaceChild(textNode, button);
        checkSmallWin(buttonId);
        switchPlayers();
        makeClickable(buttonId);
    }
}

function printBoard(arr){
    console.table(arr);
}

function initializeBoard(row,col){
    var arr = Array(row);
    for(var i=0;i<row;i++){
        arr[i]=Array(col).fill(2); // 2 means not clicked
    }
}

function checkSmallWin(buttonId){
    var charArray = buttonId.split(""); // Convert string to array of characters
    var smallZone = charArray[0]; // Access the second element of the array
    console.log("First number:", smallZone);
}

function checkLargeWin(){

}

function checkDraw(){

}

function switchPlayers(){
    if(currentPlayer == "X"){
        currentPlayer = "O";
        console.log(currentPlayer);
        return;
    }
    if(currentPlayer == "O"){
        currentPlayer = "X";
        return;
    }
}

function makeClickable(buttonId){
    // Disable the grid from clicking
    var allButtons = document.getElementById('container').getElementsByTagName('button');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].style.pointerEvents = 'none';
    }
    var charArray = buttonId.split(""); // Convert string to array of characters
    var clickableZone = charArray[1]; // Access the second element of the array
    console.log("Second number:", clickableZone);
    // Enable only the clickableZone
    var enableButtons = document.getElementById('bigBox'+clickableZone).getElementsByTagName('button');
    for (var i = 0; i < enableButtons.length; i++) {
        enableButtons[i].style.pointerEvents = 'auto';
    }
}