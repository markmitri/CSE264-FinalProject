let board = [[]]; // game board representation
const row = 9; const col = 9;
let currentPlayer = "X";

const box = document.getElementsByClassName("box");

// initializeBoard(row,col);

for(let i = 0; i < box.length; i++){
    box[i].onclick = function(evt){
        var buttonId = evt.target.id;
        console.log("Button ", buttonId, " Clicked!");
        var button = document.getElementById(buttonId);
        // Create a new text node
        var textNode = document.createTextNode(currentPlayer);
        // Replace the button with the text node
        button.parentNode.replaceChild(textNode, button);
        switchPlayers();
        makeClickable(buttonId);
    }
}

// function initializeBoard(row,col){
//     var arr = Array(row);
//     for(var i=0;i<row;i++){
//         arr[i]=Array(col).fill(0);
//     }
//     console.log(arr);
//     console.log(arr[1][2]);
// }

function checkSmallWin(){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
        }
    }
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
    // clickableZone = second buttonId number
    var charArray = buttonId.split(""); // Convert string to array of characters
    var clickableZone = charArray[1]; // Access the second element of the array
    console.log("Second number:", clickableZone);
    // get div id based on clickableZone
    // set div style as clickable
}