// // features图片切换
var i=0;
var timer;
function go() {
    timer=setInterval(function () {
        i++;
        if(i>6){
            i=0;
            $('.change-box li').css({'top':'0px'});
        }
        for(var j=0;j<6;j++){
            $('.change-box li').eq(j).css({'z-index':10-j});
        }
        // $('.change-box>ul').css({'top':-600*i+'px'});
        // $('.change-box li').eq(i).addClass('addchange').siblings('.change-box li').removeClass('addchange');

        if(i>0){
            $('.change-box li').eq(i-1).animate({'top':600+'px'},2000);
        }else{
            $('.change-box li').eq(i).css({'top':'0px'});
        }
        if(i<6){
            $('.features-btn').eq(i).addClass('addfbtn').siblings('.features-btn').removeClass('addfbtn');
            if(i==3){$('.features-btn').eq(2).removeClass('addfbtn');}
            if(i==0){$('.features-btn').eq(5).removeClass('addfbtn');}
        }else{
            $('.features-btn').eq(0).addClass('addfbtn').siblings('.features-btn').removeClass('addfbtn');
            if(i==6){$('.features-btn').eq(5).removeClass('addfbtn');}
        }
        // console.log(i);
    },3500);
}

go();

$('.btn-l').click(function () {
    clearInterval(timer);
    for(var j=0;j<6;j++){
        $('.change-box li').eq(j).css({'z-index':10-j});
    }
    $('.btn-r').removeClass('addfbtn');
    $(this).addClass('addfbtn');
    $(this).siblings().removeClass('addfbtn');
    if($(this).index()==0){
        $('.change-box li').eq(0).stop().animate({'top':'0px'},1000);
    }
    for (var h=1;h<=$(this).index();h++){
        $('.change-box li').eq(h).stop().animate({'top':'0px'},1000);
        if($(this).index()>0){
            $('.change-box li').eq($(this).index()-h).stop().animate({'top':600+'px'},1000);
            $('.change-box li').eq(6).css({'top':600+'px'});
        }
    }
    i=$(this).index();
    setTimeout(function () {
        clearInterval(timer);
        go();
        $(this).removeClass('addfbtn');
    },3500);
})

$('.btn-r').click(function () {
    clearInterval(timer);
    for(var j=0;j<6;j++){
        $('.change-box li').eq(j).css({'z-index':10-j});
    }
    $('.btn-l').removeClass('addfbtn');
    $(this).addClass('addfbtn');
    $(this).siblings().removeClass('addfbtn');
    for (var h=1;h<=$(this).index()+3;h++){
        if($(this).index()==2){
            $('.change-box li').eq(4).stop().animate({'top':'600px'},1000);
        }
        $('.change-box li').eq(h+2).stop().animate({'top':'0px'},1000);
        $('.change-box li').eq($(this).index()+3-h).stop().animate({'top':600+'px'},1000);
        $('.change-box li').eq(6).css({'top':'0px'});
    }
    i=$(this).index()+3;
    setTimeout(function () {
        clearInterval(timer);
        go();
        $(this).removeClass('addfbtn');
    },3500);
})

// 滚动监听
$('.navRight li').click(function () {
    switch ($(this).index()) {
        case 0 :
            $('html,body').animate({'scrollTop':'0px'});
            break;
        case 1 :
            $('html,body').animate({'scrollTop':$('.features').offset().top});
            break;
        case 2 :
            $('html,body').animate({'scrollTop':$('.screenshot').offset().top});
            break;
        case 3 :
            $('html,body').animate({'scrollTop':$('.download').offset().top});
            break;
        case 4 :
            $('html,body').animate({'scrollTop':$('.newsletter').offset().top});
            break;
        case 5 :
            $('html,body').animate({'scrollTop':$('.contacts').offset().top});
            break;
    }
});



