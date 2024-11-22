

var decoTop = parseInt($(".decoration-ginger").css("top"));
var bgHeight = $(".bg").height();
// var decoTopPercentOrigin = decoTop / bgHeight * 100;
var decoTopPercentOrigin = 22;
var playtime = 1;
var newplaytime;

// 薑餅人
var gingerHeight = $(".decoration-ginger").height();

var gingerminTop = parseInt($(".position-ginger").css("top")) - gingerHeight / 5;
var gingermaxTop = parseInt($(".position-ginger").css("top")) + gingerHeight / 5;
var gingerminTopPercent = gingerminTop / bgHeight * 100;
var gingermaxTopPercent = gingermaxTop / bgHeight * 100;

var gingerBottom = bgHeight - gingerHeight;
var gingerBottomPercent = gingerBottom / bgHeight * 100;

// 星星
var starHeight = $(".decoration-star").height();

var starminTop = parseInt($(".position-star").css("top")) - starHeight / 5;
var starmaxTop = parseInt($(".position-star").css("top")) + starHeight / 5;
var starminTopPercent = starminTop / bgHeight * 100;
var starmaxTopPercent = starmaxTop / bgHeight * 100;

var starBottom = bgHeight - starHeight;
var starBottomPercent = starBottom / bgHeight * 100;

// 襪子
var socksHeight = $(".decoration-socks").height();

var socksminTop = parseInt($(".position-socks").css("top")) - socksHeight / 5;
var socksmaxTop = parseInt($(".position-socks").css("top")) + socksHeight / 5;
var socksminTopPercent = socksminTop / bgHeight * 100;
var socksmaxTopPercent = socksmaxTop / bgHeight * 100;

var socksBottom = bgHeight - socksHeight;
var socksBottomPercent = socksBottom / bgHeight * 100;


gingerDrop();
// 薑餅人掉落
function gingerDrop() {
    var moveDistanceGinger = 0.06;
    var decoractionGinger = $(".decoration-ginger");
    var decoTopPercentGinger = decoTopPercentOrigin;
    var stopFunc = "ginger";
    var btnPut = $(".btn-put-ginger");

    // console.log("薑餅人掉落");

    drop(decoTopPercentGinger, moveDistanceGinger, decoractionGinger, gingerminTopPercent, gingermaxTopPercent, stopFunc, btnPut);

}

function gingerStop() {
    starDrop();
    $(".btn-put-ginger").hide();
    $(".btn-put-star").show();
}

function starDrop() {
    var moveDistanceStar = 0.02;
    var decoractionStar = $(".decoration-star");
    var decoTopPercentStar = decoTopPercentOrigin;
    var stopFunc = "star";
    var btnPut = $(".btn-put-star");

    // console.log("星星掉落");

    drop(decoTopPercentStar, moveDistanceStar, decoractionStar, starminTopPercent, starmaxTopPercent, stopFunc, btnPut);

}

function starStop() {
    socksDrop();
    $(".btn-put-star").hide();
    $(".btn-put-socks").show();
}

function socksDrop() {
    var moveDistanceSocks = 0.1;
    var decoractionSocks = $(".decoration-socks");
    var decoTopPercentSocks = decoTopPercentOrigin;
    var stopFunc = "socks";
    var btnPut = $(".btn-put-socks");

    // console.log("襪子掉落");

    drop(decoTopPercentSocks, moveDistanceSocks, decoractionSocks, socksminTopPercent, socksmaxTopPercent, stopFunc, btnPut);

}

function socksStop() {
    $(".success").show();
}


function drop(decoTopPercentD, moveDistanceD, decoractionD, minTopD, maxTopD, stopFucD, btnPutD) {
    var decoractionDrop = window.setInterval(function(){
        decoTopPercentD = decoTopPercentD + moveDistanceD;
        var decoTopPercentNew = decoTopPercentD + "%";
        decoractionD.css("top", decoTopPercentNew);


        if(decoTopPercentD >= gingerBottomPercent) {
            decoTopPercentD = decoTopPercentOrigin;
        }
    },1)

    btnPutD.click(function() {
        clearInterval(decoractionDrop);
        console.log("minTopD=" + minTopD + ", maxTopD=" + maxTopD);
        console.log("decoTopPercentD=" + decoTopPercentD);
        if(decoTopPercentD > minTopD && decoTopPercentD < maxTopD) {
            if(stopFucD == "ginger") {
                // console.log("薑餅人成功");
                gingerStop();
            }else if(stopFucD == "star") {
                // console.log("星星成功");
                starStop();
            }else if(stopFucD == "socks") {
                // console.log("襪子成功");
                socksStop();
            }
        }else {
            // if(stopFucD == "ginger") {
                // console.log("薑餅人失敗");
            // }else if(stopFucD == "star") {
                // console.log("星星失敗");
            // }else if(stopFucD == "socks") {
                // console.log("襪子失敗");
            // }
            fail();
        }
    })
}

// 失敗
function fail() {
    $(".fail").show();
    $(".decoration-ginger").css("top",decoTopPercentOrigin + "%");
    $(".decoration-star").css("top",decoTopPercentOrigin + "%");
    $(".decoration-socks").css("top",decoTopPercentOrigin + "%");

    $(".btn-put-" + playtime).remove();

    playtime = playtime + 1;
    var newGingerBtn = $("<img src='./img/put.gif'>").addClass("btn-put btn-put-ginger btn-put-" + playtime);
    $(".container").append(newGingerBtn);
    var newStarBtn = $("<img src='./img/put.gif'>").addClass("btn-put btn-put-star btn-put-" + playtime);
    $(".container").append(newStarBtn);
    var newSocksBtn = $("<img src='./img/put.gif'>").addClass("btn-put btn-put-socks btn-put-" + playtime);
    $(".container").append(newSocksBtn);

    $(".btn-put-ginger").show();
    $(".btn-put-star").hide();
    $(".btn-put-socks").hide();

    setTimeout(function () {
        $(".fail").hide();
        gingerDrop();
    },3000);
}
