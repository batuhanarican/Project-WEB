/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var getSearch = document.getElementById("search-btn");
var changeSearch = document.querySelectorAll(".search-box");
var toggleSearch = 0;

function openSearch() {
    console.log("Search button - on");
    if (toggleSearch === 0) {
        for (var i = 0; i < changeSearch.length; i ++) {
            changeSearch[i].style.top = '.6rem';
            
            toggleSearch =+ 1;
            }
            setTimeout(function() {
                for (var i = 0; i < changeSearch.length; i ++) {
                    changeSearch[i].style.opacity = '100';
                }
            }, 150);
        }
    else {
        console.log("Search button - off");
        for (var i = 0; i < changeSearch.length; i ++) {
            changeSearch[i].style.opacity = '0';
            toggleSearch -= 1;
            setTimeout(function() {
                for (var i = 0; i < changeSearch.length; i ++) {
                    changeSearch[i].style.top = '-3.5rem';
                }
            }, 150);
        }
    }
}

getSearch.addEventListener('click', openSearch, false);