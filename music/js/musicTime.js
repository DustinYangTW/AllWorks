//時間格式轉換
var min = 0, sec = 00;
function timeChange(timeSec) {
    min = parseInt(timeSec / 60);
    sec = parseInt(timeSec % 60);

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {   //sec = sec < 10 ? "0" + sec : sec;
        sec = "0" + sec;
    }

    return min + " : " + sec
}


function getDuration() {
    firstTime.innerText = timeChange(audio.currentTime); //執行現在時間，並把秒丟到時間格式轉換，並丟回來給innText
    endTimeText.innerText = timeChange(audio.duration); //執行尾巴時間，並把秒丟到時間格式轉換，並丟回來給innText
}

