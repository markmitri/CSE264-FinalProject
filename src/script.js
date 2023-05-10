let board = [[]]; // game board representation
const row = 9; const col = 9;
let currentPlayer = 0; // 0 = "X", 1 = "O"

const cell00 = document.getElementsByClassName("00");
const cell01 = document.getElementsByClassName("01");
const cell02 = document.getElementsByClassName("02");
const cell03 = document.getElementsByClassName("03");
const cell04 = document.getElementsByClassName("04");
const cell05 = document.getElementsByClassName("05");
const cell06 = document.getElementsByClassName("06");
const cell07 = document.getElementsByClassName("07");
const cell08 = document.getElementsByClassName("08");
const cell10 = document.getElementsByClassName("10");
const cell11 = document.getElementsByClassName("11");
const cell12 = document.getElementsByClassName("12");
const cell13 = document.getElementsByClassName("13");
const cell14 = document.getElementsByClassName("14");
const cell15 = document.getElementsByClassName("15");
const cell16 = document.getElementsByClassName("16");
const cell17 = document.getElementsByClassName("17");
const cell18 = document.getElementsByClassName("18");
const cell20 = document.getElementsByClassName("20");
const cell21 = document.getElementsByClassName("21");
const cell22 = document.getElementsByClassName("22");
const cell23 = document.getElementsByClassName("23");
const cell24 = document.getElementsByClassName("24");
const cell25 = document.getElementsByClassName("25");
const cell26 = document.getElementsByClassName("26");
const cell27 = document.getElementsByClassName("27");
const cell28 = document.getElementsByClassName("28");
const cell30 = document.getElementsByClassName("30");
const cell31 = document.getElementsByClassName("31");
const cell32 = document.getElementsByClassName("32");
const cell33 = document.getElementsByClassName("33");
const cell34 = document.getElementsByClassName("34");
const cell35 = document.getElementsByClassName("35");
const cell36 = document.getElementsByClassName("36");
const cell37 = document.getElementsByClassName("37");
const cell38 = document.getElementsByClassName("38");
const cell40 = document.getElementsByClassName("40");
const cell41 = document.getElementsByClassName("41");
const cell42 = document.getElementsByClassName("42");
const cell43 = document.getElementsByClassName("43");
const cell44 = document.getElementsByClassName("44");
const cell45 = document.getElementsByClassName("45");
const cell46 = document.getElementsByClassName("46");
const cell47 = document.getElementsByClassName("47");
const cell48 = document.getElementsByClassName("48");
const cell50 = document.getElementsByClassName("50");
const cell51 = document.getElementsByClassName("51");
const cell52 = document.getElementsByClassName("52");
const cell53 = document.getElementsByClassName("53");
const cell54 = document.getElementsByClassName("54");
const cell55 = document.getElementsByClassName("55");
const cell56 = document.getElementsByClassName("56");
const cell57 = document.getElementsByClassName("57");
const cell58 = document.getElementsByClassName("58");
const cell60 = document.getElementsByClassName("60");
const cell61 = document.getElementsByClassName("61");
const cell62 = document.getElementsByClassName("62");
const cell63 = document.getElementsByClassName("63");
const cell64 = document.getElementsByClassName("64");
const cell65 = document.getElementsByClassName("65");
const cell66 = document.getElementsByClassName("66");
const cell67 = document.getElementsByClassName("67");
const cell68 = document.getElementsByClassName("68");
const cell70 = document.getElementsByClassName("70");
const cell71 = document.getElementsByClassName("71");
const cell72 = document.getElementsByClassName("72");
const cell73 = document.getElementsByClassName("73");
const cell74 = document.getElementsByClassName("74");
const cell75 = document.getElementsByClassName("75");
const cell76 = document.getElementsByClassName("76");
const cell77 = document.getElementsByClassName("77");
const cell78 = document.getElementsByClassName("78");
const cell80 = document.getElementsByClassName("80");
const cell81 = document.getElementsByClassName("81");
const cell82 = document.getElementsByClassName("82");
const cell83 = document.getElementsByClassName("83");
const cell84 = document.getElementsByClassName("84");
const cell85 = document.getElementsByClassName("85");
const cell86 = document.getElementsByClassName("86");
const cell87 = document.getElementsByClassName("87");
const cell88 = document.getElementsByClassName("88");
const cell90 = document.getElementsByClassName("90");
const cell91 = document.getElementsByClassName("91");
const cell92 = document.getElementsByClassName("92");
const cell93 = document.getElementsByClassName("93");
const cell94 = document.getElementsByClassName("94");
const cell95 = document.getElementsByClassName("95");
const cell96 = document.getElementsByClassName("96");
const cell97 = document.getElementsByClassName("97");
const cell98 = document.getElementsByClassName("98");

initializeBoard(row,col);

box.onclick = function (evt) {
    var button = document.getElementById('00');
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