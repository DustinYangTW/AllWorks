function Set_Play() {
    audio.play();//音樂撥放
    btnPlay.innerText = ";";
    musicTimeBar(); //時間增加BAR
    musicName.children[0].innerText = "目前播放 : " + audio.children[0].title;
    setSpeed();//設定撥放速度
}

function Set_Pause() {
    audio.pause();
    btnPlay.innerText = "4";
    musicName.children[0].innerText = "目前暫停音樂中";
}


//停止播放，並且回原點
function Stop() {
    audio.pause();
    audio.currentTime = 0;
    bar.style.background = `linear-gradient(90deg, #00ffff, #FF6347 0%, transparent 0)`; //改變bar條的顏色
    bar.insertRule = bar.style.background + ";";
    btnPlay.innerText = "4";
    getStopTime();
    musicName.children[0].innerText = "請按下播放鈕歌曲";
    audio.load();
}

//快轉倒轉
function changeTime(t) {
    audio.currentTime += t;
}

//音量微調
function changeVolume(v) {
    rangeVolume.value = parseInt(rangeVolume.value) + v; //VLAUE進來是字串，要轉為數字
    setVolume();
}

//音量調整
function setVolume() {
    audio.volume = rangeVolume.value / 100;
    innterVolume();
}

//速度微調
function changeSpeed(s) {
    if (parseInt(rangeFast.value)) {

    }
    rangeFast.value = parseInt(rangeFast.value) + s; //VLAUE進來是字串，要轉為數字
    setSpeed();
}

//速度調整
function setSpeed() {
    audio.playbackRate = rangeFast.value / 50;
    innterSpeed();
}

//靜音按鈕
function set_stopvolume() {
    if (audio.muted === false) {
        audio.muted = true;
        changeColor.children[6].style.backgroundColor = "red"; //在ID:changeColor下的第6行，改變背景色
    }
    else {
        audio.muted = false;
        changeColor.children[6].style.backgroundColor = "#eae6218e";//在ID:changeColor下的第6行，改變背景色
        /*        console.log(muted.style.backgroundColor)*/
    }

}

function getStopTime() {//暫停時，時間重製
    firstTime.innerText = "00:00";
}


function set_Loop() {//循環播放
    set_playlaw.innerText = set_playlaw.innerText == "單曲循環" ? "單曲播放" : "單曲循環";
}

function setRandom() {//隨機播放
    var n = Math.floor(Math.random() * (song.options.length));
    changenextsong(n);
}

function set_Random() {//循環播放
    set_playlaw.innerText = set_playlaw.innerText == "隨機播放" ? "單曲播放" : "隨機播放";

}

function set_allPlayEnd() {//全曲播放
    set_playlaw.innerText = set_playlaw.innerText == "全曲循環" ? "單曲播放" : "全曲循環";
    console.log(set_playlaw.innerText)
}

function songBook() {
    book.className = book.className == "open" ? "hide" : "open";
    updataMusicSong.className = updataMusicSong.className == "open" ? "hide" : "open";
   

    if (book.className == "open") {
        changeColor.children[10].style.backgroundColor = "red";
    }
    else {
        changeColor.children[10].style.backgroundColor = "#eae6218e";
    }
    console.log(changeColor.children[10].style.backgroundColor);
}