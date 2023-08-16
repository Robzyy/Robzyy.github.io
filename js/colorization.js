"use strict";

// ✏️ TODO: Unrandomize lol
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const array = [
    {
        palette_file: "css/color-tokens_blue.css",
        hero_img: "/assets/me2.jpg",
        hero_img_desc: null

    },
    {
        palette_file: "css/color-tokens_yellow.css",
        hero_img: "https://source.unsplash.com/cVJsVGkxCoo.png",
        hero_img_desc: "Image from Unsplash"
    },
    {
        palette_file: "css/color-tokens_purple.css",
        hero_img: "/assets/strokes1.jpg",
        hero_img_desc: "Unknown image source..."
    },
]

let x = getRandomInt(array.length)

// Include the CSS color palette in the <head> element
let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = array[x].palette_file;
head.appendChild(link);

// Replace the hero image
let img = document.getElementById("hero-img");
img.src = array[x].hero_img;

// Replace the hero image description
let info = document.getElementById("hero-image-info");
if (array[x].hero_img_desc == null) {
    info.style.display = "none"
}
else {
    info.childNodes[3].innerHTML = array[x].hero_img_desc
}

