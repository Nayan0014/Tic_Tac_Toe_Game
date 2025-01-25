console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let tingAudio = new Audio("ting.mp3");
let gameOverAudio = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"0":"X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName("boxText");

let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135],
]
wins.forEach((e)=>{
    if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText)&& (boxTexts[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won!";
        gameOver = true;
        gameOverAudio.play();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

        document.querySelector('.line').style.width = "30vw";
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    }
})
} 

// Game Logic
//music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', (e)=>{
        if(boxText.innerText == ''){
            boxText.innerText = turn;
            turn = changeTurn();
            tingAudio.play();
            checkWin();

            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

// add eventListener to Reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0";
})


