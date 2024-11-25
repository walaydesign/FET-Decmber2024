

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

$(".introduction_btn").click(function() {
    $(".introduction").hide();
    gingerDrop();
})

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
    var moveDistanceStar = 0.04;
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
    var moveDistanceSocks = 0.08;
    var decoractionSocks = $(".decoration-socks");
    var decoTopPercentSocks = decoTopPercentOrigin;
    var stopFunc = "socks";
    var btnPut = $(".btn-put-socks");

    // console.log("襪子掉落");

    drop(decoTopPercentSocks, moveDistanceSocks, decoractionSocks, socksminTopPercent, socksmaxTopPercent, stopFunc, btnPut);

}

function socksStop() {
    setTimeout(function () {
        $(".success").show();
    }, 300)
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
            if(stopFucD == "ginger") {
                // console.log("薑餅人失敗");
                gingerFail();
            }else if(stopFucD == "star") {
                // console.log("星星失敗");
                starFail();
            }else if(stopFucD == "socks") {
                // console.log("襪子失敗");
                socksFail();
            }
            // fail();
        }
    })
}

// 失敗
function gingerFail() {
    $(".decoration-ginger").css("top",decoTopPercentOrigin + "%");

    $(".btn-put-ginger.btn-put-" + playtime).remove();
    playtime = playtime + 1;
    var newGingerBtn = $("<img src='./img/put.gif'>").addClass("btn-put btn-put-ginger btn-put-" + playtime);
    $(".container").append(newGingerBtn);

    $(".btn-put-ginger").show();
    $(".btn-put-star").hide();
    $(".btn-put-socks").hide();

    var redo = "ginger";
    failCommon(redo);
   
}

function starFail() {
    $(".decoration-star").css("top",decoTopPercentOrigin + "%");

    $(".btn-put-star.btn-put-" + playtime).remove();
    playtime = playtime + 1;
    var newStarBtn = $("<img src='./img/put.gif'>").addClass("btn-put btn-put-star btn-put-" + playtime);
    $(".container").append(newStarBtn);

    $(".btn-put-ginger").hide();
    $(".btn-put-star").show();
    $(".btn-put-socks").hide();

    var redo = "star";
    failCommon(redo);

}

function socksFail() {
    $(".decoration-socks").css("top",decoTopPercentOrigin + "%");

    $(".btn-put-socks.btn-put-" + playtime).remove();
    playtime = playtime + 1;
    var newSocksBtn = $("<img src='./img/put.gif'>").addClass("btn-put btn-put-socks btn-put-" + playtime);
    $(".container").append(newSocksBtn);

    $(".btn-put-ginger").hide();
    $(".btn-put-star").hide();
    $(".btn-put-socks").show();

    var redo = "socks";
    failCommon(redo);

}

function failCommon(startFunc) {
    $(".fail").show();
    setTimeout(function () {
        $(".fail").hide();
        if(startFunc == "ginger") {
            // console.log("薑餅人重來");
            gingerDrop();
        }else if(startFunc == "star") {
            // console.log("星星重來");
            starDrop();
        }else if(startFunc == "socks") {
            // console.log("襪子重來");
            socksDrop();
        }
    },3000);
}