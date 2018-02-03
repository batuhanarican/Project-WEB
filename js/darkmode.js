/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var getDarkmode = document.getElementById("darkmode");
var changeDarkmode = document.querySelector("body");
var darkData;

function checkDarkmode() {
    darkData = getDarkmode.checked;
    console.log(getDarkmode.checked);
    returnDarkmode();
    return darkData;
}

function returnDarkmode() {
    if (darkData === true) {
        changeDarkmode.classList.add('dark');
    }
    
    if (darkData === false) {
        changeDarkmode.classList.remove('dark');
    }
}

getDarkmode.addEventListener('click', checkDarkmode, false);