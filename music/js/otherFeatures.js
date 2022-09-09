//musicName.children[0]//類似陣列


bar_time.addEventListener('click', function (event) {
    var x = event.offsetX / bar_time.clientWidth;  //計算滑鼠點擊DIV X軸的距離 ，並且除以 當下DIV的寬度
    audio.currentTime = audio.duration * x;  //歌曲最後時間*變數X(小數) = 現在時間
    Set_Play();
})


song.addEventListener('change', function () {  //監聽改變的函數
    chandeNusic(song.selectedIndex);
})

//更換歌曲
function changenextsong(i) {
    var index = song.selectedIndex + i; //選擇當下歌曲的陣列號碼並加上i得變數
    if (index < 0) {
        index = song.options.length - 1; //陣列長度要-1，因為陣列是0.1.2.3.4，但抓取長度是5，所以要減1
        chandeNusic(index);
    }
    else if (index > song.options.length - 1) {
        chandeNusic(0);  //當歌曲撥放長度>音樂陣列長度時，音樂回從第一首開始撥放
    }
    else {
        chandeNusic(index);
    }
}

//改變歌曲
function changeSong(c) {
    var index = event.target.options[0].value;
    /*    console.log(index);*/
}

//回傳現在的數值回去給TEXT格子
function innterSpeed() {
    TextFast.value = "X" + audio.playbackRate.toFixed(1);
}

//回傳現在的數值回去給TEXT格子
function innterVolume() {
    TextVolume.value = Math.round(audio.volume * 100) + "%";
}

//抓歌曲回去最上層的Select
for (var i = 1; i < sBook.children.length; i++) {
    sBook.children[i].draggable = "true";
    sBook.children[i].id = "song" + (i );
        sBook.children[i].addEventListener('dragstart', function () {
            drag(event);
        });
    option = document.createElement("option");//<option></option>
    option.innerText = sBook.children[i].innerText;
    option.value = sBook.children[i].title;
    song.appendChild(option);
    changenextsong(song.selectedIndex);
    /*    console.log(option.innerText, option.value);*/
}

///更換音樂
function chandeNusic(i) {
    song.options[i].selected = true;
    audio.children[0].src = song.options[i].value;  //改變audio下面陣列的第0個值得src
    audio.children[0].title = song.options[i].innerText;//改變audio下面陣列的第0個值得title
    audio.load();//請audio重新載入，切換後audio.pause會等於true，會把所以屬性規0
    if (btnPlay.innerText == ";") {
        Play();
    }
}
