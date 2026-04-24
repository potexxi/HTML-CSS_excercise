var userEntry = document.getElementById("input");
var outputResult = document.getElementById("outputResult");
var outputCount = document.getElementById("outputCount");
var outputTime = document.getElementById("outputTime");
var max;
var rounds;
UserEntry();
var number = Math.floor(Math.random() * max);
var counter = 0;

var minutes = 0;

var startTime = performance.now();

let interval = setInterval(setTime, 10)

function setTime(){
    var seconds = parseInt((performance.now() - startTime) / 1000);
    if(seconds/ 60 >= 1){
        minutes += 1;
        startTime = performance.now();
    }
    if(minutes < 10 && seconds < 10){
        outputTime.innerHTML = `Zeit: 0${minutes}:0${seconds}`
    }
    else if(minutes < 10 && seconds > 10){
        outputTime.innerHTML = `Zeit: 0${minutes}:${seconds}`
    }
    else if(minutes > 10 && seconds < 10){
        outputTime.innerHTML = `Zeit: ${minutes}:0${seconds}`
    }
    else if(minutes > 10 && seconds > 10){
        outputTime.innerHTML = `Zeit: ${minutes}:${seconds}`
    }
}

function UserEntry(){
    var error = true;
    var entry = prompt("Bis zur welcher Zahl willst du raten?")
    while(error){
        max = parseInt(entry);
        if(isNaN(max)){
            entry = prompt("Gebe eine Zahl ein! Bis zur welcher Zahl willst du raten?");
        }
        else{
            error = false;
        }
    }
    var error1 = true;
    var entry2 = prompt("Wie viele Runden willst du spielen?")
    while(error1){
        rounds = parseInt(entry2);
        if(isNaN(rounds)){
            entry2 = prompt("Gebe eine Zahl ein! Wie viele Runden willst du spielen?");
        }
        else{
            error1 = false;
        }
    }
}

function checkNumber(){
    var entry = parseInt(userEntry.value);
    if(counter >= rounds){
        outputResult.innerHTML = `Zu viele Runden! Die Zahl war ${number}`;
    }
    else{
        if(entry == number){
            clearInterval(interval);
            outputResult.innerHTML = "RICHTIG!";
            counter += 1;
            var seconds = performance.now() - startTime;
            outputTime.innerHTML = `Du hast ${minutes} Minuten und ${parseInt(seconds / 1000)} Sekunden gebraucht.`
            document.getElementById("btnCheck").style.pointerEvents = "none";
        }
        else if(entry < number){
            outputResult.innerHTML = "Zu wenig!";
            counter += 1;
        }
        else if(entry > number){
            outputResult.innerHTML = "Zu hoch";
            counter += 1;
        }
    }
    outputCount.innerHTML = `Du hast ${counter} Versuche gebraucht.`;
}

function reset(){
    UserEntry();
    number = Math.floor(Math.random() * max);
    counter = 0;
    outputCount.innerHTML = "";
    outputResult.innerHTML = "";
    userEntry.value = "";
    document.getElementById("btnCheck").style.pointerEvents = "all";
    console.log(number);
    interval = setInterval(setTime, 10);
    startTime = performance.now();
}

console.log(number);