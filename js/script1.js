"use strict";

function expand()
{
    let navbar = document.getElementById("navbar")
    var positionTop = navbar.getBoundingClientRect().top;

    if(positionTop == 0)
    {
        console.log("I should be expanded");
        navbar.style.width = "90vw";
        // navbar.style.left = "0";
    }
    else
    {
        console.log("I should be small");
        navbar.style.width = "100%";   
        // navbar.style.position = "sticky";
    }
}

// document.addEventListener("scroll", expand);
// expand();