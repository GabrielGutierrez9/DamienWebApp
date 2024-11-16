// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let op;
let action;
let intervalId;

function initSite() {
    op = 1.0;
    action = "fadeOut";

    if (document.getElementById("MainImg")) {
        if (!intervalId) {
            intervalId = setInterval(ChangeImg, 500);
        }
    }
    else {
        clearInterval(intervalId);
    }
}

function ChangeImg() {

    if (action === "fadeOut") {
        if (op > 0.5) {
            op -= 0.25;
            document.getElementById("MainImg").style.opacity = op;
        }
        else {
            action = "ChangeImg";
        }
    }
    else if (action === "fadeIn") {
        if (op < 1.0) {
            op += 0.25;
            document.getElementById("MainImg").style.opacity = op;
        }
        else {
            action = "fadeOut";
        }
    }
    else if (action === "ChangeImg") {
        SetImg();
        action = "fadeIn";
    }
}

function SetImg() {

    if (document.getElementById("MainImg").src.includes('pic1.jpg')) {
        document.getElementById("MainImg").src = 'Media/pic2.jpg';
        document.getElementById("lbl1").style.backgroundColor = 'gray';
        document.getElementById("lbl2").style.backgroundColor = 'deepskyblue';
        document.getElementById("lbl3").style.backgroundColor = 'gray';
        document.getElementById("lbl4").style.backgroundColor = 'gray';
    }
    else if (document.getElementById("MainImg").src.includes('pic2.jpg')) {
        document.getElementById("MainImg").src = 'Media/pic3.jpg';
        document.getElementById("lbl1").style.backgroundColor = 'gray';
        document.getElementById("lbl2").style.backgroundColor = 'gray';
        document.getElementById("lbl3").style.backgroundColor = 'deepskyblue';
        document.getElementById("lbl4").style.backgroundColor = 'gray';
    }
    else if (document.getElementById("MainImg").src.includes('pic3.jpg')) {
        document.getElementById("MainImg").src = 'Media/pic4.jpg';
        document.getElementById("lbl1").style.backgroundColor = 'gray';
        document.getElementById("lbl2").style.backgroundColor = 'gray';
        document.getElementById("lbl3").style.backgroundColor = 'gray';
        document.getElementById("lbl4").style.backgroundColor = 'deepskyblue';
    }
    else if (document.getElementById("MainImg").src.includes('pic4.jpg')) {
        document.getElementById("MainImg").src = 'Media/pic1.jpg';
        document.getElementById("lbl1").style.backgroundColor = 'deepskyblue';
        document.getElementById("lbl2").style.backgroundColor = 'gray';
        document.getElementById("lbl3").style.backgroundColor = 'gray';
        document.getElementById("lbl4").style.backgroundColor = 'gray';
    }
}

function StopInterval() {
    clearInterval(intervalId);
    intervalId = null;
}

function CheckForImg() {
    if (!document.getElementById("MainImg")) {
        clearInterval(intervalId);
        intervalId = null;
    }
    else {
        initSite();
    }
}