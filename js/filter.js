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

var getFilter = document.getElementById("filter-btn");
var changeFilter = document.querySelectorAll(".options");
var toggleFilter = 0;

var getSort = document.getElementById("sort-btn");
var changeSort = document.querySelectorAll(".selections");
var toggleSort = 0;

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
        changeFilosofie[0].classList.remove('changeFilosofie');
        }
    }


    else {
        console.log("Filosofie - false");
        for (var i = 0; i < changeFilosofie.length; i ++) {
            changeFilosofie[0].classList.add('changeFilosofie');
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
        changeVrolijk[0].classList.remove('changeVrolijk');
        }
    }


    else {
        console.log("Vrolijk - false");
        for (var i = 0; i < changeVrolijk.length; i ++) {
            changeVrolijk[0].classList.add('changeVrolijk');
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
    if (dramaData === true) {
        console.log("Drama - true");
        for (var i = 0; i < changeDrama.length; i ++) {
        changeDrama[0].classList.remove('changeDrama');
        }
    }


    else {
        console.log("Drama - false");
        for (var i = 0; i < changeDrama.length; i ++) {
            changeDrama[0].classList.add('changeDrama');
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
    if (komedieData === true) {
        console.log("Komedie - true");
        for (var i = 0; i < changeKomedie.length; i ++) {
        changeKomedie[0].classList.remove('changeKomedie');
        }
    }


    else {
        console.log("Komedie - false");
        for (var i = 0; i < changeKomedie.length; i ++) {
            changeKomedie[0].classList.add('changeKomedie');
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
    if (liefdeData === true) {
        console.log("Liefde - true");
        for (var i = 0; i < changeLiefde.length; i ++) {
        changeLiefde[0].classList.remove('changeLiefde');
        }
    }


    else {
        console.log("Liefde - false");
        for (var i = 0; i < changeLiefde.length; i ++) {
            changeLiefde[0].classList.add('changeLiefde');
        }
    }
}

function openFilter() {
    console.log("Filter button - on");
    if (toggleFilter === 0) {
        for (var i = 0; i < changeFilter.length; i ++) {
            changeFilter[i].classList.add('changeFilter');
            toggleFilter =+ 1;
            }
        }
    else {
        console.log("Filter button - off");
        for (var i = 0; i < changeFilter.length; i ++) {
            changeFilter[i].classList.remove('changeFilter');
            toggleFilter -= 1;
            }
    }
}

function openSort() {
    console.log("Sort button - on");
    if (toggleSort === 0) {
        for (var i = 0; i < changeSort.length; i ++) {
            changeSort[i].classList.add('changeSort');
            toggleSort =+ 1;
            }
        }
    else {
        console.log("Sort button - off");
        for (var i = 0; i < changeSort.length; i ++) {
            changeSort[i].classList.remove('changeSort');
            toggleSort -= 1;
            }
    }
}

getFilter.addEventListener('click', openFilter, false);
getSort.addEventListener('click', openSort, false);

getFilosofie.addEventListener('click', checkFilosofie, false);
getVrolijk.addEventListener('click', checkVrolijk, false);
getDrama.addEventListener('click', checkDrama, false);
getKomedie.addEventListener('click', checkKomedie, false);
getLiefde.addEventListener('click', checkLiefde, false);