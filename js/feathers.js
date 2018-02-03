var getFeather1 = document.getElementsByClassName("feather1")[0];
var changeFeather1 = document.querySelector("main div.feathers img:nth-of-type(1)");

var getFeather2 = document.getElementsByClassName("feather2")[0];
var changeFeather2 = document.querySelector("main div.feathers img:nth-of-type(2)");

var getFeather3 = document.getElementsByClassName("feather3")[0];
var changeFeather3 = document.querySelector("main div.feathers img:nth-of-type(3)");

var getFeather4 = document.getElementsByClassName("feather4")[0];
var changeFeather4 = document.querySelector("main div.feathers img:nth-of-type(4)");

var changeP = document.querySelector("main div.container p:not(:first-child)");

function checkP() {
    changeP.classList.add('changeP1');
    setTimeout(function() {
                for (var i = 0; i < changeSearch.length; i ++) {
                    changeP.classList.add('changeP2');
                }
            }, 1000);
}

function checkFeather1() {
    console.log("Running feather1");
    changeFeather1.classList.add('changeFeather1');
    checkP();
}

function checkFeather2() {
    console.log("Running feather2");
    changeFeather2.classList.add('changeFeather2');
    checkP();
}

function checkFeather3() {
    console.log("Running feather3");
    changeFeather3.classList.add('changeFeather3');
    checkP();
}

function checkFeather4() {
    console.log("Running feather move");
    changeFeather4.classList.add('changeFeather4');
    checkP();
}

getFeather1.addEventListener('click', checkFeather1, false);
getFeather2.addEventListener('click', checkFeather2, false);
getFeather3.addEventListener('click', checkFeather3, false);
getFeather4.addEventListener('click', checkFeather4, false);