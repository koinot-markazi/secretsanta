$(document).ready(function () {
    if ($(window).width() < 768) {

    }
    else {
        $(".section1").mousemove(function (event) {
            var moveX = ($(window).width() / 2 - event.pageX) * 0.02;
            var moveY = ($(window).height() / 2 - event.pageY) * 0.02;

            $(".candy-anim").css("margin-left", moveX + "px");
            $(".candy-anim").css("margin-top", moveY + "px");

            $(".star-anim").css("margin-left", -moveX + "px");
            $(".star-anim").css("margin-top", -moveY + "px");

            $(".snow-anim").css("margin-left", -moveX + "px");
            $(".star-anim").css("margin-top", -moveY + "px");
        });
    }
    $(".participate-btn").on("click", function () {
        $(".form").fadeIn();
        $(".participate-btn").hide();
        $(".logo").css("margin-top", "20px");
    });
    $(".close-btn").on("click", function () {
        $(".form").hide();
        $(".participate-btn").fadeIn();
        $(".logo").css("margin-top", "100px");
    });

    $('#audio-ctrl').click(function(){
        if($('#audio-text').html() == "Play"){
            $('#audio-text').html('Pause');
            $('#audio-btn').attr("src", "img/pause.svg")
            document.getElementById('audio-player').play();
        }
        else{
            $('#audio-text').html('Play');
            $('#audio-btn').attr("src", "img/play.svg")
            document.getElementById('audio-player').pause();
        }
    })


});

function player(){
    document.getElementById('audio-player').play();
    $('#audio-text').html('Pause');
    $('#audio-btn').attr("src", "img/pause.svg")
}

let snowmax = 40,
    snowcolor = new Array("#aaaacc", "#ddddff", "#ccccdd", "#f3f3f3", "#f0ffff"),
    snowtype = new Array("Arial Black", "Arial Narrow", "Times", "Comic Sans MS"),
    snowletter = "*",
    sinkspeed = 0.5,
    snowmaxsize = 30,
    snowminsize = 8,
    snow = new Array(),
    marginbottom,
    marginright,
    timer,
    i_snow = 0,
    x_mv = new Array(),
    crds = new Array(),
    lftrght = new Array()

function randommaker(range) {
    rand = Math.floor(range * Math.random())
    return rand
}

function initsnow() {
    marginbottom = window.innerHeight
    marginright = window.innerWidth
    let snowsizerange = snowmaxsize - snowminsize
    for (i = 0; i <= snowmax; i++) {
        crds[i] = 0
        lftrght[i] = Math.random() * 15
        x_mv[i] = 0.03 + Math.random() / 10
        snow[i] = document.getElementById("s" + i)
        snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)]
        snow[i].size = randommaker(snowsizerange) + snowminsize
        snow[i].fontSize = snow[i].size
        snow[i].style.color = snowcolor[randommaker(snowcolor.length)]
        snow[i].sink = sinkspeed * snow[i].size / 5
        snow[i].posx = randommaker(marginright - snow[i].size)
        snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size)
        snow[i].style.left = snow[i].posx
        snow[i].style.top = snow[i].posy
    }
    movesnow()
}

function movesnow() {
    for (i = 0; i <= snowmax; i++) {
        crds[i] += x_mv[i]
        snow[i].posy += snow[i].sink
        snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px"
        snow[i].style.top = snow[i].posy + "px"
        if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
            snow[i].posx = randommaker(marginright - snow[i].size)
            snow[i].posy = 0
        }
    }
    let timer = setTimeout("movesnow()", 50)
}

for (i = 0; i <= snowmax; i++) {
    document.write("<span id='s" + i + "'style='position: absolute; top: -" + snowmaxsize + "'>" + snowletter + "</span>")
}

initsnow()