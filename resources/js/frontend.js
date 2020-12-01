$(window).scroll(function () {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    var now = y / window.innerHeight;

    if(now>0.5 && now<1) {
        window.scrollTo({
            top: 0,
            // behavior: "smooth",
        });
    }
    else if(now>0 && now<=0.5 || now>1.5 && now<2) {
　　　　window.scrollTo({
            top: window.innerHeight,
            // behavior: "smooth",
        });
    }
    else if(now>1 && now<=1.5 || now>2.5 && now<3) {
　　　　window.scrollTo({
            top: window.innerHeight*2,
            // behavior: "smooth"
        });
    }
    else if(now>2 && now<=2.5 || now>3.5 && now<4) {
　　　　window.scrollTo({
            top: window.innerHeight*3,
            // behavior: "smooth"
        });
    }
    else if(now>3 && now<=3.5 || now>4.5 && now<5) {
　　　　window.scrollTo({
            top: window.innerHeight*4,
            // behavior: "smooth"
        });
    }
    else if(now>4 && now<=4.5 || now>5.5 && now<6) {
　　　　window.scrollTo({
            top: window.innerHeight*5,
            // behavior: "smooth"
        });
    }
    else if(now>5 && now<=5.5 || now>6.5 && now<7) {
　　　　window.scrollTo({
            top: window.innerHeight*6,
            // behavior: "smooth"
        });
    }
    else if(now>6 && now<=6.5 || now>7.5 && now<8) {
　　　　window.scrollTo({
            top: window.innerHeight*7,
            // behavior: "smooth"
        });
    }
    else if(now>7 && now<=7.5 || now>8.5 && now<9) {
　　　　window.scrollTo({
            top: window.innerHeight*8,
            // behavior: "smooth"
        });
    }
    else if(now>8 && now<=8.5 || now>9.5 && now<10) {
　　　　window.scrollTo({
            top: window.innerHeight*9,
            // behavior: "smooth"
        });
    }
});
