let rock = document.getElementById("enemyrock");
let paper = document.getElementById("enemypaper")
let scrissors = document.getElementById("enemyscrissors")
let winText = document.getElementById("win");
let drawText = document.getElementById("draw");
let loseText = document.getElementById("lose");
let question = document.getElementById("questionmark");

let wins = 0;
let draws = 0;
let loses = 0;

function Rock(){
    let selected = selectRandom();
    document.getElementById(selected).style.display = "flex";
    question.style.display = "none";

    if(selected == "enemyscrissors"){
        winText.innerHTML = "Győzelem: "+wins;
        wins++;
    }
    if(selected == "enemyrock"){
        drawText.innerHTML = "Döntetlen: "+draws;
        draws++;
    }
    if(selected == "enemypaper"){
        loseText.innerHTML = "Vereség: "+loses;
        loses++;
    }
    
}

function Paper(){
    let selected = selectRandom();
    document.getElementById(selected).style.display = "flex";
    question.style.display = "none";

    if(selected == "enemyrock"){
        winText.innerHTML = "Győzelem: "+wins;
        wins++;
    }
    if(selected == "enemypaper"){
        drawText.innerHTML = "Döntetlen: "+draws;
        draws++;
    }
    if(selected == "enemyscrissors"){
        loseText.innerHTML = "Vereség: "+loses;
        loses++;
    }
    
}
function Scissors(){
    let selected = selectRandom();
    document.getElementById(selected).style.display = "flex";
    question.style.display = "none";

    if(selected == "enemypaper"){
        winText.innerHTML = "Győzelem: "+wins;
        wins++;
    }
    if(selected == "enemyscrissors"){
        drawText.innerHTML = "Döntetlen: "+draws;
        draws++;
    }
    if(selected == "enemyrock"){
        loseText.innerHTML = "Vereség: "+loses;
        loses++;
    }
    
}

function selectRandom(){
    const cars = ["enemyrock", "enemypaper", "enemyscrissors"];
    for(let id of cars){
        document.getElementById(id).style.display = "none";
    }
    return cars[Math.floor(Math.random()*cars.length)];
}

function restart(){
    selectRandom();
    wins = 0;
    draws = 0;
    loses = 0;  
    winText.innerHTML = "Győzelem:"+wins;
    drawText.innerHTML = "Döntetlen:"+draws;
    loseText.innerHTML = "Vesztes:"+loses;
    question.style.display = "flex";
}