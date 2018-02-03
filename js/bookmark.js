/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var getBookmark = document.getElementsByClassName("fav");
var changeBookmark = document.querySelectorAll("nav ul li:nth-child(3)");

function checkBookmark() {
    console.log("Running fav-micro");
    changeBookmark[0].classList.add('bookmarkGif');
    setTimeout(function() {
        changeBookmark[0].classList.remove('bookmarkGif');
    },1800);
}

for (var i = 0; i < 11; i ++) {
    getBookmark[i].addEventListener('click', checkBookmark, false);
}