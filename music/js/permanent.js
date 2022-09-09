function musicTimeBar() {
    if (audio.currentTime >= audio.duration) {
        if (set_playlaw.innerText == "隨機播放") {
            setRandom();
        }
        else if (set_playlaw.innerText == "全曲循環") {
            setRandom();
        }
        else if (set_playlaw.innerText == "單曲循環") {
            changenextsong(0); //改變歌曲，那邊得函數把0丟過去"changenextsong" 導致i+0，所以才會維持在i
        }
        else if (set_playlaw.innerText == "單曲播放" && (song.options.length - 1) == song.selectedIndex) {
            changenextsong(+1);
            Stop(); //音樂播放結束
            musicName.children[0].innerText = "音樂已全部撥放，請重新播放";
        }
        else {
            changenextsong(+1);//撥放完，播放下一首歌曲
        }
    }
    else if (audio.paused === true) {  //如果暫停狀態不執行
    }
    else {
        bar.style.background = `linear-gradient(90deg, #00ffff, #FF6347 ${audio.currentTime / audio.duration * 100}%, transparent 0)`;
        bar.insertRule = bar.style.background + ";";
        getDuration();
        setInterval(musicTimeBar, 1000);
    }
}

/*播放與暫停功能*/
function Play() {
    if (audio.paused === true) {
        Set_Play();//設定音樂撥放
    }
    else {
        Set_Pause();//設定音樂暫停
    }
}


function changColorBtn(){
    if (set_playlaw.innerText == "隨機播放") {
        changeColor.children[8].style.backgroundColor = "red";
        changeColor.children[7].style.backgroundColor = "#eae6218e"
        changeColor.children[9].style.backgroundColor = "#eae6218e"
    }
    else if (set_playlaw.innerText == "全曲循環") {
        changeColor.children[7].style.backgroundColor = "#eae6218e"
        changeColor.children[8].style.backgroundColor = "#eae6218e"
        changeColor.children[9].style.backgroundColor = "red";
    }
    else if (set_playlaw.innerText == "單曲循環") {
        changeColor.children[7].style.backgroundColor = "red";
        changeColor.children[8].style.backgroundColor = "#eae6218e"
        changeColor.children[9].style.backgroundColor = "#eae6218e"
    }
    else{
        changeColor.children[7].style.backgroundColor = "#eae6218e"
        changeColor.children[8].style.backgroundColor = "#eae6218e"
        changeColor.children[9].style.backgroundColor = "#eae6218e"
    }
}

changeColor.children[7].addEventListener('click', changColorBtn, false);
changeColor.children[8].addEventListener('click', changColorBtn, false);
changeColor.children[9].addEventListener('click', changColorBtn, false);