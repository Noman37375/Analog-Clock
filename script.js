let Hr = document.getElementById('hour');
let Min = document.getElementById('minute');
let Sec = document.getElementById('second');

function displayTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotation = 30 * h + m / 2;
    let mRotation = 6 * m;
    let sRotation = 6 * s;

    Hr.style.transformOrigin = '50% 100%';
    Min.style.transformOrigin = '50% 100%';
    Sec.style.transformOrigin = '50% 100%';

    Hr.style.transform = `rotate(${hRotation}deg)`;
    Min.style.transform = `rotate(${mRotation}deg)`;
    Sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);