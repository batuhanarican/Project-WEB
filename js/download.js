/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var getDownload = document.getElementsByClassName("download");
var changeDownload = document.querySelectorAll("main section div.grid article div.load");
var changeDownloadIcon = document.querySelectorAll("main section div.grid article div.download");

function checkDownload1(x) {
    console.log("Running download");
	changeDownload[x].classList.add('loadJS1');
    changeDownloadIcon[x].classList.add('downloadJS1');
    changeDownloadIcon[x].classList.remove('downloadJS2');
    setTimeout(function() {
        changeDownload[x].classList.add('loadJS2');
    },2500);
    setTimeout(function() {
		changeDownload[x].classList.add('loadJS3');
    },3000);
    setTimeout(function() {
        changeDownloadIcon[x].classList.add('downloadJS2');
        changeDownloadIcon[x].classList.remove('downloadJS1');
        changeDownload[x].classList.remove('loadJS1');
        changeDownload[x].classList.remove('loadJS2');
        changeDownload[x].classList.remove('loadJS3');
    },4000);
}

function checkDownload2(x) {
    console.log("Running download");
	changeDownload[x].classList.add('loadJS1');
    changeDownloadIcon[x].classList.add('downloadJS1');
    changeDownloadIcon[x].classList.remove('downloadJS2');
    setTimeout(function() {
        changeDownload[x].classList.add('loadJS2');
    },2500);
    setTimeout(function() {
		changeDownload[x].classList.add('loadJS3');
    },3000);
    setTimeout(function() {
        changeDownloadIcon[x].classList.add('downloadJS2');
        changeDownloadIcon[x].classList.remove('downloadJS1');
        changeDownload[x].classList.remove('loadJS1');
        changeDownload[x].classList.remove('loadJS2');
        changeDownload[x].classList.remove('loadJS3');
    },4000);
}

function checkDownload3(x) {
    console.log("Running download");
	changeDownload[x].classList.add('loadJS1');
    changeDownloadIcon[x].classList.add('downloadJS1');
    changeDownloadIcon[x].classList.remove('downloadJS2');
    setTimeout(function() {
        changeDownload[x].classList.add('loadJS2');
    },2500);
    setTimeout(function() {
		changeDownload[x].classList.add('loadJS3');
    },3000);
    setTimeout(function() {
        changeDownloadIcon[x].classList.add('downloadJS2');
        changeDownloadIcon[x].classList.remove('downloadJS1');
        changeDownload[x].classList.remove('loadJS1');
        changeDownload[x].classList.remove('loadJS2');
        changeDownload[x].classList.remove('loadJS3');
    },4000);
}
getDownload[0].addEventListener('click', function(){checkDownload1(0)}, false);
getDownload[1].addEventListener('click', function(){checkDownload2(1)}, false);
getDownload[2].addEventListener('click', function(){checkDownload3(2)}, false);