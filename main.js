function show() {
    //Get current time
    var dateInfo = new Date();
    var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
        min = dateInfo.getMinutes(),
        sec = dateInfo.getSeconds(),
        milsec = dateInfo.getMilliseconds();
    var hrAngle = hr * 30 + (min * 6 / 12),
        minAngle = min * 6 + (sec * 6 / 60),
        secAngle = sec * 6 + (milsec * 0.36 / 1000);

    document.getElementById('hor').style.transform = "rotate(" + hrAngle + "deg)";
    document.getElementById('mn').style.transform = "rotate(" + minAngle + "deg)";
    document.getElementById('sc').style.transform = "rotate(" + secAngle + "deg)";

}
window.onload = (event) => {
    show();
    setInterval(show, 1000);
};