visible = 0;

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
};
