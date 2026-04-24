var outputResult = document.getElementById("outputResult");
var outputfirst = document.getElementById("outputFirst");
var outputsign = document.getElementById("outputSign");
var outputsecond = document.getElementById("outputSecond");
var outputrounds = document.getElementById("outputRounds");
var outputcorrect = document.getElementById("outputCorrect");
var outputfeedback = document.getElementById("outputFeedback");
var inputRounds = document.getElementById("inputRounds");
var inputMaxNumber = document.getElementById("inputMaxNumber");
var inputresult = document.getElementById("inputResult");
var maxrounds;
var rounds = 0;
var correct = 0;
var max;
var sign = "";
var result;
var first;
var second;
var imghappy = document.createElement("img");
imghappy.src = "pictures/happy.png";
imghappy.height = 200;
imghappy.width = 300;
var imgsad = document.createElement("img");
imgsad.src = "pictures/sad.png";
imgsad.height = 200;
imgsad.width = 300;

document.getElementById("label").style.opacity = 0;
inputresult.style.opacity = 0;
document.getElementById("buttoncheck").style.opacity = 0;

inputresult.disabled = true;


function DisableButtons(){
    buttonminus.disabled = true;
    buttonplus.disabled = true;
    buttonrandom.disabled = true;
    buttonStart.disabled = true;
}

function Reset(){
    buttonminus.disabled = false;;
    buttonplus.disabled = false;
    buttonrandom.disabled = false;
    buttonStart.disabled = false;
    inputRounds.disabled = false;
    inputMaxNumber.disabled = false;
    outputrounds.innerHTML = "";
    outputcorrect.innerHTML = "";
    document.getElementById("label").style.opacity = 0;
    inputresult.style.opacity = 0;
    document.getElementById("buttoncheck").style.opacity = 0;
    inputresult.disabled = true;
    rounds = 0;
    correct = 0;
    outputfirst.innerHTML = "";
    outputsign.innerHTML = "";
    outputsecond.innerHTML = "";
    inputRounds.value = "";
    inputMaxNumber.value = "";
    document.getElementById("buttonminus").style.background = null;
    document.getElementById("buttonplus").style.background = null;
    document.getElementById("buttonrandom").style.background = null;
    outputfeedback.innerHTML = "";
    outputResult.innerHTML = "";
    document.getElementById("container").innerHTML = "";
}

function ChangeButtonColor(){
    document.getElementById("buttonminus").style.background = null;
    document.getElementById("buttonplus").style.background = null;
    document.getElementById("buttonrandom").style.background = null;
    if(sign == "+"){
        document.getElementById("buttonplus").style.background = "Lightgreen";
    }
    else if(sign == "-"){
        document.getElementById("buttonminus").style.background = "Lightgreen";
    }
    else if(sign == "?"){
        document.getElementById("buttonrandom").style.background = "Lightgreen";
    }
}

function Check(){
    rounds += 1;
    outputrounds.innerHTML = `Runde: ${rounds}/${maxrounds}`;
    document.getElementById("container").innerHTML = "";
    if(inputresult.value == result){
        correct += 1;
        outputcorrect.innerHTML = `Richtig: ${correct}`;
        outputResult.innerHTML = "Richtig!";
        document.getElementById("container").appendChild(imghappy);
    }
    else{
        outputResult.innerHTML = "Nicht richtig!";
        document.getElementById("container").appendChild(imgsad);
    }
    inputresult.value = "";
    if(rounds >= maxrounds){
        inputresult.disabled = true;
        inputresult.value = "";
        document.getElementById("buttoncheck").disabled = true;
        outputfeedback.innerHTML = "Sehr gut!";
    }
    else{
        SetRandom();
    }
}

function SetRandom(){
    first = parseInt(Math.floor(Math.random() * max));
    second = parseInt(Math.floor(Math.random() * max));
    outputfirst.innerHTML = first;
    outputsecond.innerHTML = second;
    if(sign == "+"){
        result = first + second;
        outputsign.innerHTML = "+";
    }
    else if(sign == "-"){
        result = first - second;
        outputsign.innerHTML = "-";
    }
    else if(sign == "?"){
        var random = parseInt(Math.floor(Math.random() * 2));
        if(random == 0){
            result = first + second;
            outputsign.innerHTML = "+";
        }
        else if(random == 1){
            result = first - second;
            outputsign.innerHTML = "-";
        }
    }
}

function Start(){
    if(isNaN(inputRounds.value) || inputRounds.value < 0){
        alert("Die Rundenanzahl muss groesser 0 sein!");
        return;
    }
    if(isNaN(inputMaxNumber.value) || inputMaxNumber.value < 1){
        alert("Der Zahlenraum muss groesser 0 sein!");
        return;
    }
    if(sign == ""){
        alert("Waehle ein Rechenoperator aus!");
        return;
    }
    outputcorrect.innerHTML = `Richtig: ${correct}/${rounds}`
    inputRounds.disabled = true;
    inputMaxNumber.disabled = true;
    inputresult.disabled = false;
    document.getElementById("label").style.opacity = 1;
    inputresult.style.opacity = 1;
    document.getElementById("buttoncheck").style.opacity = 1;
    maxrounds = parseInt(inputRounds.value);
    max = parseInt(inputMaxNumber.value);
    DisableButtons();
    outputrounds.innerHTML = `Runde: ${rounds}/${maxrounds}`;
    SetRandom();
}

function ButtonMinus(){
    sign = "-";
    ChangeButtonColor();
}

function ButtonPlus(){
    sign = "+";
    ChangeButtonColor();
}

function ButtonRandom(){
    sign = "?";
    ChangeButtonColor();
}