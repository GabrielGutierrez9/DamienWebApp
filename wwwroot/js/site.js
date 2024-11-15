// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

setInterval(DecreaseOpacity, 5000);
//const increaseOpacityIntervalId = setInterval(IncreaseOpacity, 5000);

//setTimeout(decreaseOpacityIntervalId, 5000);

let op = 1;

function IncreaseOpacity() {
    let op = document.getElementById("MainImg").style.opacity;
    document.getElementById("MainImg").style.opacity = op + 0.2;
}

function DecreaseOpacity() {
    if (op === 0.0) {
        ChangeImg();
        
    }
    op -= 0.2;
    document.getElementById("MainImg").style.opacity = op;
}

function ChangeImg() {

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