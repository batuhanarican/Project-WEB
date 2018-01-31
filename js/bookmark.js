/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var getBookmark = document.getElementsByClassName("fav")[0];
var changeBookmark = document.querySelectorAll("nav ul li:nth-child(3)");

function checkBookmark() {
    console.log("Running fav-micro");
    changeBookmark[0].style.backgroundImage = 'url(https://oege.ie.hva.nl/~aricane001/pweb/img/bookmarks.gif)';
    setTimeout(function() {
        changeBookmark[0].style.backgroundImage = 'url(https://oege.ie.hva.nl/~aricane001/pweb/img/bookmarks.svg)';
    },1800);
}

getBookmark.addEventListener('click', checkBookmark, false);