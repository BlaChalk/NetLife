(window.onload = function () {
    let visible = 0;

    function closeVisiblePage(visible) {
        $('#section'+ visible).css('height', '0%').children('div').css('display', 'none');
    };

    function openVisiblePage(visible) {
        $('#section'+ visible).css('height', '101%').children('div').css('display', 'flex');
    };

    document.body.onmousewheel = function (e) {
        diraction = e.deltaY;
        if (diraction>0 && visible<11) {
            closeVisiblePage(visible);
            visible +=1;
            openVisiblePage(visible);
        }
        else if (diraction<0 && visible>0) {
            closeVisiblePage(visible);
            visible -=1;
            openVisiblePage(visible);
        }
        if (visible === 0) {
            $('#ybox--1').removeClass('ybox__hide');
        }
    };

    $('.ybox__close').click(function () {
        $('#ybox--1').addClass('ybox__hide');
    });

    changeVisible = function (page) {
        closeVisiblePage(visible);
        visible = page;
        openVisiblePage(visible);
    };



    // var timecount = 0;
    // setInterval(
    //     function () {
    //         timecount = timecount+1;
    //         if (timecount/1000 === 1 && visible === 0) {
    //             $('.ybox--1').removeClass('ybox__hide');
    //         }
    // }, 1000);


    // SVG clock
    var hands = [];
    hands.push(document.querySelector('#secondhand > *'));
    hands.push(document.querySelector('#minutehand > *'));
    hands.push(document.querySelector('#hourhand > *'));

    var cx = 100;
    var cy = 100;

    function shifter(val) {
    return [val, cx, cy].join(' ');
    }

    var date = new Date();
    var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
    var minuteAngle = 360 * date.getMinutes() / 60;
    var secAngle = 360 * date.getSeconds() / 60;

    hands[0].setAttribute('from', shifter(secAngle));
    hands[0].setAttribute('to', shifter(secAngle + 360));
    hands[1].setAttribute('from', shifter(minuteAngle));
    hands[1].setAttribute('to', shifter(minuteAngle + 360));
    hands[2].setAttribute('from', shifter(hoursAngle));
    hands[2].setAttribute('to', shifter(hoursAngle + 360));

    for(var i = 1; i <= 12; i++) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', '100');
    el.setAttribute('y1', '30');
    el.setAttribute('x2', '100');
    el.setAttribute('y2', '40');
    el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
    el.setAttribute('style', 'stroke: #ffffff;');
    document.querySelector('svg').appendChild(el);
    }
});

