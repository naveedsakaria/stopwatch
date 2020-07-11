var min = "00";
var sec = "00";
var milsec = "00";
var minutes = document.getElementById('min');
var seconds = document.getElementById('sec');
var millisecond = document.getElementById('milsec');

var status;
var interval;
function timer() {
    milsec++;
    millisecond.innerHTML = milsec;
    if (milsec >= 100) {
        sec++
        seconds.innerHTML = sec;
        milsec = "00";
    } else if (sec >= 60) {
        min++;
        minutes.innerHTML = min;
        sec = "00";
    }
}
function start() {
    interval = setInterval(timer, 10);
    document.getElementById('btn').disabled = true;
}
function pause() {
    clearInterval(interval);
    document.getElementById('btn').disabled = false;
}
function reset() {
    clearInterval(interval)
    min = "00";
    sec = "00";
    milsec = "00";
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    millisecond.innerHTML = milsec;
    document.getElementById('btn').disabled = false;
}