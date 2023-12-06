let body_dark = "#141417";
let body_light = "white";
let text_light = "black";
let text_dark = "white";
let nav_light = "#f0f0f0";
let nav_dark = "#7b7b7b";
let nav_text_light = "#2c6dc5";
let nav_text_dark = "white";

var css = document.querySelector(':root');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('home').addEventListener('click', function() {
        window.location.href = "../index.html";
    });
    document.getElementById('resume').addEventListener('click', function() {
        window.open('../resume.pdf');
    });
    document.getElementById('style').addEventListener('click', function() {
        let mode = document.getElementById('style').innerHTML;
        if(mode == "Dark Mode"){
            css.style.setProperty('--body', body_dark);
            css.style.setProperty('--primary_text', text_dark);
            css.style.setProperty('--nav', nav_dark);
            css.style.setProperty('--nav_text', nav_text_dark);
            document.getElementById('style').innerHTML = "Light Mode";
        }else if(mode == "Light Mode"){
            css.style.setProperty('--body', body_light);
            css.style.setProperty('--primary_text', text_light);
            css.style.setProperty('--nav', nav_light);
            css.style.setProperty('--nav_text', nav_text_light);
            document.getElementById('style').innerHTML = "Dark Mode";
        }
    });
});