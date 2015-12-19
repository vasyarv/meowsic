$(document).ready(function(){
    // Указываев id-шники контейнеров
    var cssSelector = {
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    };

    // Создадим плейлист. Структура проста, как масло в холодильнике
    var playlist = [
        {
            author:"TSP",
            title:"Cro Magnon Man",
            discription: "Привет, я  описание",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
        },
        {
            author:"Miaow",
            title:"Tempered Song",
            discription: "Уже можно подпевать",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
        },
        {
            author:"Miaow",
            title:"Hidden",
            discription: "Привет, я  описание",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            author:"Miaow",
            title:"Hidden",
            discription: "Привет, я  описание",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            author:"Miaow",
            title:"Hidden",
            discription: "Привет, я  описание",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            author:"Miaow",
            title:"Hidden",
            discription: "Привет, я  описание",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            author:"Miaow",
            title:"Hidden",
            discription: "Привет, я  описание",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            author:"Miaow",
            title:"Hidden",
            discription: "Привет, я  описание",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }
    ];

    /*
        Настройки. Подробнее о них в документации
    */
    var options = {
        swfPath: "js",
        supplied: "oga, mp3",
        wmode: "window",
        smoothPlayBar: false,
        keyEnabled: true
    };

    // Заводим ВАЗ 2110
    var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);

    // Просто, чтобы было.
    getPlayList = function() {
        return myPlaylist;
    }
});
