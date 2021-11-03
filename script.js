// global
let hex = 0x000000;

function myFunction() {
    hex += 0x8;
    if (hex > 0xFFFFFF) {
        hex = 0x000000;
    }
    let color = parseColor(hex);
    console.log(color);
    document.body.style.backgroundColor = color;
    document.getElementById("text").innerHTML = color;
}

function parseColor(color) {
    if (typeof color === 'number') {
        //make sure our hexadecimal number is padded out
        color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
    }
    return color;
};

setInterval(myTimer, 1);
function myTimer() {
    myFunction();
}