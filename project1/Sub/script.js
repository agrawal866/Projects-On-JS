var currentPlayer = 'X';
const name1 = localStorage.getItem("name1");
const name2 = localStorage.getItem("name2");


window.addEventListener("load",()=>{
    document.getElementById("player1").innerText = localStorage.getItem("name1");
    document.getElementById("player2").innerText = localStorage.getItem("name2");
    document.getElementById("turn").innerText = localStorage.getItem("name1");
})

const arr = Array(9).fill(null);

function checkWinner(){
    if( arr[0]!== null && arr[0]==arr[1] && arr[1]==arr[2] || // row 1
        arr[3]!== null && arr[3]==arr[4] && arr[4]==arr[5] || // row 2
        arr[6]!== null && arr[6]==arr[7] && arr[7]==arr[8] || // row 3
        arr[0]!== null && arr[0]==arr[3] && arr[3]==arr[6] || // coln 1
        arr[1]!== null && arr[1]==arr[4] && arr[4]==arr[7] || // coln 2
        arr[2]!== null && arr[2]==arr[5] && arr[5]==arr[8] || // coln 3
        arr[0]!== null && arr[0]==arr[4] && arr[4]==arr[8] || // dignal 1
        arr[2]!== null && arr[2]==arr[4] && arr[4]==arr[6]  // dignal 2
    ) {
        if(currentPlayer == 'X'){
            document.write(`Congratulations, ${name1} Your are the WINNER`);
            return;
        }
        else{
            document.write(`Congratulations, ${name2} Your are the WINNER`);
            return;
        }
    }
    if(!arr.some((e)=> e === null)) {
        document.write("OHHHH Match Draw , Want Play Again (For Rematch: Reload The Page) (New Players: Back the page)");
    }
}


function handleClick(el){
    const id = Number(el.id);
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    if(currentPlayer =='X'){
        document.getElementById("turn").innerText = localStorage.getItem("name2");
    }
    else if(currentPlayer =='O'){
        document.getElementById("turn").innerText = localStorage.getItem("name1");
    }
    currentPlayer = currentPlayer === 'X' ? 'O':'X';
}