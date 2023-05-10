let board = [[]]; // game board representation
const row = 9; const col = 9;
let currentPlayer = 0; // 0 = "X", 1 = "O"

const box = document.getElementsByClassName("box");
const cell00 = document.getElementById("00");
const cell01 = document.getElementById("01");
const cell02 = document.getElementById("02");
const cell03 = document.getElementById("03");
const cell04 = document.getElementById("04");
const cell05 = document.getElementById("05");
const cell06 = document.getElementById("06");
const cell07 = document.getElementById("07");
const cell08 = document.getElementById("08");
const cell10 = document.getElementById("10");
const cell11 = document.getElementById("11");
const cell12 = document.getElementById("12");
const cell13 = document.getElementById("13");
const cell14 = document.getElementById("14");
const cell15 = document.getElementById("15");
const cell16 = document.getElementById("16");
const cell17 = document.getElementById("17");
const cell18 = document.getElementById("18");
const cell20 = document.getElementById("20");
const cell21 = document.getElementById("21");
const cell22 = document.getElementById("22");
const cell23 = document.getElementById("23");
const cell24 = document.getElementById("24");
const cell25 = document.getElementById("25");
const cell26 = document.getElementById("26");
const cell27 = document.getElementById("27");
const cell28 = document.getElementById("28");
const cell30 = document.getElementById("30");
const cell31 = document.getElementById("31");
const cell32 = document.getElementById("32");
const cell33 = document.getElementById("33");
const cell34 = document.getElementById("34");
const cell35 = document.getElementById("35");
const cell36 = document.getElementById("36");
const cell37 = document.getElementById("37");
const cell38 = document.getElementById("38");
const cell40 = document.getElementById("40");
const cell41 = document.getElementById("41");
const cell42 = document.getElementById("42");
const cell43 = document.getElementById("43");
const cell44 = document.getElementById("44");
const cell45 = document.getElementById("45");
const cell46 = document.getElementById("46");
const cell47 = document.getElementById("47");
const cell48 = document.getElementById("48");
const cell50 = document.getElementById("50");
const cell51 = document.getElementById("51");
const cell52 = document.getElementById("52");
const cell53 = document.getElementById("53");
const cell54 = document.getElementById("54");
const cell55 = document.getElementById("55");
const cell56 = document.getElementById("56");
const cell57 = document.getElementById("57");
const cell58 = document.getElementById("58");
const cell60 = document.getElementById("60");
const cell61 = document.getElementById("61");
const cell62 = document.getElementById("62");
const cell63 = document.getElementById("63");
const cell64 = document.getElementById("64");
const cell65 = document.getElementById("65");
const cell66 = document.getElementById("66");
const cell67 = document.getElementById("67");
const cell68 = document.getElementById("68");
const cell70 = document.getElementById("70");
const cell71 = document.getElementById("71");
const cell72 = document.getElementById("72");
const cell73 = document.getElementById("73");
const cell74 = document.getElementById("74");
const cell75 = document.getElementById("75");
const cell76 = document.getElementById("76");
const cell77 = document.getElementById("77");
const cell78 = document.getElementById("78");
const cell80 = document.getElementById("80");
const cell81 = document.getElementById("81");
const cell82 = document.getElementById("82");
const cell83 = document.getElementById("83");
const cell84 = document.getElementById("84");
const cell85 = document.getElementById("85");
const cell86 = document.getElementById("86");
const cell87 = document.getElementById("87");
const cell88 = document.getElementById("88");
const cell90 = document.getElementById("90");
const cell91 = document.getElementById("91");
const cell92 = document.getElementById("92");
const cell93 = document.getElementById("93");
const cell94 = document.getElementById("94");
const cell95 = document.getElementById("95");
const cell96 = document.getElementById("96");
const cell97 = document.getElementById("97");
const cell98 = document.getElementById("98");

//initializeBoard(row,col);

cell00.onclick = function (evt) {
    console.log("button pressed");
    var button = document.getElementById('00');
    // Create a new text node
    var textNode = document.createTextNode('X');
    // Replace the button with the text node
    button.parentNode.replaceChild(textNode, button);
}

box.onclick = function (evt){
    var buttonId = evt.target.id;
    console.log("Button:", buttonId, " Clicked!");
    var button = document.getElementById(buttonId);
    // Create a new text node
    var textNode = document.createTextNode('X');
    // Replace the button with the text node
    button.parentNode.replaceChild(textNode, button);
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
    if(currentPlayer == 0){
        currentPlayer == 1;
    }
    if(currentPlayer == 1){
        currentPlayer == 0;
    }
}