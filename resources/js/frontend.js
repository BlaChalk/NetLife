
let visible = 0;

document.body.onmousewheel = function (e) {
    diraction = e.deltaY;
    if (diraction>0 && visible<9) {
        $('#section'+ visible).css('height', '0%').children('div').css('display', 'none');
        visible +=1;
        $('#section'+ visible).css('height', '101%').children('div').css('display', 'flex');
    }
    else if (diraction<0 && visible>0) {
        $('#section'+ visible).css('height', '0%').children('div').css('display', 'none');
        visible -=1;
        $('#section'+ visible).css('height', '101%').children('div').css('display', 'flex');
    }
    if (visible === 0) {
        $('#ybox--1').removeClass('ybox__hide');
    }
};

$('.ybox__close').click(function () {
    console.log('ttt');
   $('#ybox--1').addClass('ybox__hide');
});

// var timecount = 0;
// setInterval(
//     function () {
//         timecount = timecount+1;
//         if (timecount/1000 === 1 && visible === 0) {
//             $('.ybox--1').removeClass('ybox__hide');
//         }
// }, 1000);
