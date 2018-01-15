/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var getFilosofie = document.getElementById("filosofie");
var filosofie = getFilosofie.checked;
var filosofieData;
var changeFilosofie = document.querySelectorAll(".filosofie-data");

var getVrolijk = document.getElementById("vrolijk");
var vrolijk = getVrolijk.checked;
var vrolijkData;
var changeVrolijk = document.querySelectorAll(".vrolijk-data");

var getDrama = document.getElementById("drama");
var drama = getDrama.checked;
var dramaData;
var changeDrama = document.querySelectorAll(".drama-data");

var getKomedie = document.getElementById("komedie");
var komedie = getKomedie.checked;
var komedieData;
var changeKomedie = document.querySelectorAll(".komedie-data");

var getLiefde = document.getElementById("liefde");
var liefde = getLiefde.checked;
var liefdeData;
var changeLiefde = document.querySelectorAll(".liefde-data");

function checkFilosofie() {
    filosofieData = getFilosofie.checked;
    console.log(getFilosofie.checked);
    returnFilosofie();
    return filosofieData;
}

checkFilosofie();

function returnFilosofie() {
    if (filosofieData === true) {
        console.log("Filosofie - true");
        for (var i = 0; i < changeFilosofie.length; i ++) {
        changeFilosofie[i].style.display = '';
        }
    }


    else {
        console.log("Filosofie - false");
        for (var i = 0; i < changeFilosofie.length; i ++) {
        changeFilosofie[i].style.display = 'none';
        }
    }
}


function checkVrolijk() {
    vrolijkData = getVrolijk.checked;
    console.log(getVrolijk.checked);
    returnVrolijk();
    return vrolijkData;
}

checkVrolijk();

function returnVrolijk() {
    if (vrolijkData === true) {
        console.log("Vrolijk - true");
        for (var i = 0; i < changeVrolijk.length; i ++) {
        changeVrolijk[i].style.display = '';
    }
    }

    else {
        console.log("Vrolijk - false");
        for (var i = 0; i < changeVrolijk.length; i ++) {
        changeVrolijk[i].style.display = 'none';
        }
    }
}

function checkDrama() {
    dramaData = getDrama.checked;
    console.log(getDrama.checked);
    returnDrama();
    return dramaData;
}

checkDrama();

function returnDrama() {
    if (dramaData == true) {
        console.log("Drama - true");
        for (var i = 0; i < changeDrama.length; i ++) {
        changeDrama[i].style.display = '';
        }
    }
    else {
        console.log("Drama - false");
        for (var i = 0; i < changeDrama.length; i ++) {
        changeDrama[i].style.display = 'none';
        }
    }
}

function checkKomedie() {
    komedieData = getKomedie.checked;
    console.log(getKomedie.checked);
    returnKomedie();
    return komedieData;
}

checkKomedie();

function returnKomedie() {
    if (komedieData == true) {
        console.log("Komedie - true");
        for (var i = 0; i < changeKomedie.length; i ++) {
        changeKomedie[i].style.display = '';
        }
    }

    else {
        console.log("Komedie - false");
        for (var i = 0; i < changeKomedie.length; i ++) {
        changeKomedie[i].style.display = 'none';
        }
    }
}

function checkLiefde() {
    liefdeData = getLiefde.checked;
    console.log(getLiefde.checked);
    returnLiefde();
    return liefdeData;
}

checkLiefde();

function returnLiefde() {
    if (liefdeData == true) {
        console.log("Liefde - true");
        for (var i = 0; i < changeLiefde.length; i ++) {
        changeLiefde[i].style.display = '';
        }
    }
    else {
        console.log("Liefde - false");
       for (var i = 0; i < changeLiefde.length; i ++) {
        changeLiefde[i].style.display = 'none';
        }
    }
}

getFilosofie.addEventListener('click', checkFilosofie, false);
getVrolijk.addEventListener('click', checkVrolijk, false);
getDrama.addEventListener('click', checkDrama, false);
getKomedie.addEventListener('click', checkKomedie, false);
getLiefde.addEventListener('click', checkLiefde, false);