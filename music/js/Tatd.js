//廣告js
function fulloff() {
    document.getElementById('full-screen').style.visibility  = "hidden";
    document.getElementById('text').style.visibility  = "hidden";
    document.getElementById('btn_close').style.visibility  = "hidden";
}

setTimeout(function () {  //2秒後執行turnOnBtn
    turnOnBtn();
}, 2000);

//X插入HTML
var aid = document.getElementById("aid");
function turnOnBtn() {
    aid.innerHTML =`<a href="https://www.youtube.com/watch?v=s_bpfn5c6-c&ab_channel=%E8%A8%88%E7%95%AB%E9%80%9A%E8%A1%8C" id="btn_close" onclick="fulloff()" target="_blank">x</a>` ;
}