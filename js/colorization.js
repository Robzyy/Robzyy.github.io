"use strict";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const thing = [
    {
        img: "/assets/me2.jpg",
        palette_file: "css/color-tokens_blue.css",
    },
    {
        img: "https://source.unsplash.com/cVJsVGkxCoo.png",
        palette_file: "css/color-tokens_yellow.css",
    },
    {
        img: "/assets/strokes1.jpg",
        palette_file: "css/color-tokens_purple.css",
    },
]

let x = getRandomInt(thing.length)

// Get HTML head element
let head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
let link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = thing[x].palette_file;

// Append link element to HTML head
head.appendChild(link);

let img = document.getElementById("hero-img");
img.src = thing[x].img;