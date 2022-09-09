function allowDrop(ev) {
    ev.preventDefault();//停止物件預設行為

}

//drag與drop是互補的，都要有才會有動作
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);//setid  
    //最主要的意思是把抓到到ID，"設定"到text變數內
}

function drop(ev) {
    ev.preventDefault();//停止物件預設行為
    var data = ev.dataTransfer.getData("text");//getId 取出text的id
    //dataTransfer -> 轉換成id
    if (ev.target.id == "") {

        ev.target.appendChild(document.getElementById(data));
        //appendChild把那個id剪下，並貼到新的地區
        //如果沒有ID(放到音樂區了)，就直接放入
    }
    else {
        ev.target.parentNode.appendChild(document.getElementById(data));
        //放在目標區的parentNode(父節點)裡面
        //白話文就是 如果有ID的話，就會放到那個ID的父節點內
    }
}

function re_SetMusic() {
    if (tBook.children.length == 1) {
        Stop();
        delMusicOption();//removeChild移除資料
        window.alert("想要播放的歌曲內 '沒有歌曲'，請加入後再嘗試");

        for (var i = 1; i < sBook.children.length; i++) {  //把所有歌曲加入回去歌單中
            option = document.createElement("option");
            option.innerText = sBook.children[i].innerText;
            option.value = sBook.children[i].title;
            song.appendChild(option);
            //appendChild新增資料
        }
    }
    else {
        delMusicOption();
        for (var i = 1; i < tBook.children.length; i++) {
            option = document.createElement("option");
            option.innerText = tBook.children[i].innerText;
            option.value = tBook.children[i].title;
            song.appendChild(option);
            //appendChild新增資料
        }
    }
    changenextsong(song.selectedIndex);
}

function delMusicOption() {
    for (var j = song.children.length - 1; j >= 0; j--) {
        song.removeChild(song.children[j]);
        //removeChild移除資料
    }
}