
let humanWin=0;
let pcWin=0;


do{ //ciclo che si ripete finchè o pc o giocatore non vince

// funzione per la generazione della scelta 
const pcScelta = () => {
    let num= Math.floor(Math.random() * 3)+1;
    switch(num){
        case 1:
            return "rock";
        case 2: 
            return "paper";
        case 3:
            return "scissors";
    }
};

// funzione per la gestione della scelta del giocatore
const humanScelta = () => {
    let scelta = prompt("scelta: rock, paper, scissors");
    scelta = scelta.toLowerCase();
    return scelta;
};

let human=humanScelta(); 
let pc=pcScelta();

//funzione per constatare vincitore della singola partita
function win(human, pc) {

    if ((human == "rock" && pc == "scissors") || (human == "scissors" && pc == "paper") || (human == "paper" && pc == "rock")) {
        return "vinto";
    }
    else if (human == pc) {
        return "pareggio";
    }
    else {
        return "perso";
    }
}

let wins=win(human, pc); //assegno alla variabile win il risultato della singola partita
console.log("Scelta giocatore: "+human);
console.log("Scelta PC: "+pc);

if(wins=="vinto"){
    humanWin++;
    console.log("vinto");
}
else if(wins=="pareggio"){
    console.log("pareggio");
}
else{
    pcWin++;
    console.log("perso");
}
    console.log("vinte dal PC: "+pcWin);
    console.log("vinte dal giocatore: "+humanWin);
    console.log(" ");
}
while(pcWin<5 && humanWin<5);