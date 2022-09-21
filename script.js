var farhenheitCelsius = document.querySelector("#temp-options");
var highTemps = document.querySelectorAll(".high");
var lowTemps = document.querySelectorAll(".low");

const initHighTemps = highTemps;
const initLowTemps = lowTemps;
var currHigh = [];
var currLow = [];

function change() {

    if (farhenheitCelsius.value === "celsius") {
        for (var i = 0; i < highTemps.length; i++){
            currHigh.push(highTemps[i].innerHTML);
            currLow.push(lowTemps[i].innerHTML);
            highTemps[i].innerHTML = ` ${Math.round((parseInt(highTemps[i].innerHTML)-32)*(5/9))} &#8451`
            lowTemps[i].innerHTML = ` ${Math.round((parseInt(lowTemps[i].innerHTML)-32)*(5/9))} &#8451`
        }
        // 
    } else if (farhenheitCelsius.value === "fahrenheit"){
        for (var i = 0; i < highTemps.length; i++){
            highTemps[i].innerHTML = `${parseInt(currHigh[i])} &#8457`;
            lowTemps[i].innerHTML = `${parseInt(currLow[i])} &#8457`;
        }
        currHigh = [];
        currLow = [];
    }
}


function removeCookies() {
    document.querySelector(".cookies").remove();
}


