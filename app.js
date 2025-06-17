let Gameseq = [];
let Userseq = [];
let Score = 0;
let level = 0;
let start = false;
let btn = false;
const arr = ["Rock", "Paper", "Scissor"];

let text = document.querySelector(".text");
let score = document.querySelector(".score");
let table = document.querySelector("table tbody");

let btns = document.querySelector(".btns");
btns.addEventListener("click", () => {
    if (btn) {
        btn = false;
        Pressbtn(event);
    }
})

document.addEventListener("keypress", function () {
    if (start == false) {
        start = true
        level = 0;
        table.innerHTML = "";
        LevelUp();
    }
})

function LevelUp() {
    if (level < 5) {
        level = level + 1;
        btn = true;
        Gameseq = [];
        text.innerHTML = `Round: ${level}`;
        let rendom = arr[Math.floor(Math.random() * 3)];
        Gameseq.push(rendom);
        console.log(Gameseq);
    }
    else {
        text.innerHTML = "Press Any Key From Your Keyboard To Restart Game";
        start = false;

    }
}

function Pressbtn(e) {
    if (e.target.tagName == "IMG") {
        Userseq = [];
        let Ans = e.target.getAttribute('id');
        Userseq.push(Ans);
        console.log(Userseq);
        CheckAns((Userseq.length)-1);
    }
}


function CheckAns(n) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    if (Gameseq[n] == "Rock" && Userseq[n] == "Paper" || Gameseq[n] == "Paper" && Userseq[n] == "Scissor" || Gameseq[n] == "Scissor" && Userseq[n] == "Rock") {
        td1.innerHTML = `${Gameseq[n]}`;
        tr.appendChild(td1);
        td2.innerHTML = Userseq[n];
        tr.appendChild(td2);
        td3.innerHTML = "You"
        tr.appendChild(td3);
        table.appendChild(tr);
        Score = Score + 1;
        score.innerHTML = `Score: ${Score}`;
        LevelUp();
    }
    else if (Gameseq[n] == "Rock" && Userseq[n] == "Rock" || Gameseq[n] == "Paper" && Userseq[n] == "Paper" || Gameseq[n] == "Scissor" && Userseq[n] == "Scissor") {
        td1.innerHTML = `${Gameseq[n]}`;
        tr.appendChild(td1);
        td2.innerHTML = Userseq[n];
        tr.appendChild(td2);
        td3.innerHTML = "Tie";
        tr.appendChild(td3);
        table.appendChild(tr);
        LevelUp();
    }
    else {
        td1.innerHTML = `${Gameseq[n]}`;
        tr.appendChild(td1);
        td2.innerHTML = Userseq[n];
        tr.appendChild(td2);
        td3.innerHTML = "Computer";
        tr.appendChild(td3);
        table.appendChild(tr);
        LevelUp();
    }
}
