const color_number = document.getElementById("color-number");
const color_container = document.getElementById("color-container");
const score_conatiner = document.getElementById("score-container");
let randomColor = null;
let score = 0;




function RandomNoGeneratorBtw(min,max){
    return (min + Math.floor(Math.random() * (max-min+1)));
}
function RandomClrGenrator(){
    const red = RandomNoGeneratorBtw(0,255) ;
    const green = RandomNoGeneratorBtw(0,255) ;
    const blue = RandomNoGeneratorBtw(0,255) ;
    return (`rgb(${red}, ${green}, ${blue})`);
}

function incrementScore(){
    score += 1;
    score_conatiner.innerText = score;
}

function validateResult(el){
    const pickedColor = el.target.style.backgroundColor;
    if(pickedColor == randomColor){
        incrementScore();
    }
    else score = 0;
    window.localStorage.setItem("score", score);
    startGame();
    
}



function startGame(){
    score = Number(window.localStorage.getItem("score") ?? 0);
    score_conatiner.innerText = score;

    
    color_container.innerHTML = null;
    randomColor = RandomClrGenrator();
    color_number.innerText = randomColor;

    const ansIndex = RandomNoGeneratorBtw(0,5);

    for (let i=0; i<6; i++){
        const div = document.createElement("div");
        div.addEventListener("click",validateResult )
        if(i == ansIndex){
            div.style.backgroundColor = randomColor;
        }
        else{
            div.style.backgroundColor = RandomClrGenrator(0,255);
        }
        color_container.append(div);
    }
}
window.addEventListener("load", startGame);