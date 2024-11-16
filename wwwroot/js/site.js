// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let op;
let action;

function initSite() {
    op = 1.0;
    action = "fadeOut";
    setInterval(ChangeImg, 300);
}

function ChangeImg() {

    if (action === "fadeOut") {
        if (op > 0.2) {
            op -= 0.05;
            document.getElementById("MainImg").style.opacity = op;
        }
        else {
            action = "ChangeImg";
        }
    }
    else if (action === "fadeIn") {
        if (op < 1.0) {
            op += 0.05;
            document.getElementById("MainImg").style.opacity = op;
        }
        else {
            action = "fadeOut";
        }
    }
    else if(action === "ChangeImg") {
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