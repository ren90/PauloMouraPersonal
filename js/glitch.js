$(document).ready(function(){

    var canvas = document.getElementById('canvas');
    console.log(canvas);
    var context = canvas.getContext('2d')
      , img = new Image()
      , w
      , h
      , offset
      , glitchInterval;

    //img.src = 'http://blog.codepen.io/wp-content/uploads/2012/06/White-Large.png';
    img.src = 'js/back.jpg';
    img.onload = function() {
      init();
        window.onresize = init;
    };
    console.log(img);

    var init = function() {
        clearInterval(glitchInterval);
        canvas.width = w = window.innerWidth;
        offset = w * .1;
        canvas.height = h = ~~(824 * ((w - (offset * 2)) / img.width)); ;
        glitchInterval = setInterval(function() {
            clear();
            context.drawImage(img, 0, 0, img.width, 824, 0, 0, w, h);
            setTimeout(glitchImg, randInt(250, 1000));
        }, 500);
    };

    var clear = function() {
        context.rect(0, 0, w, h);
        context.fill();
    };

    var glitchImg = function() {
        for (var i = 0; i < randInt(1, 13); i++) {
            var x = Math.random() * w;
            var y = Math.random() * h;
            var spliceWidth = w - x;
            var spliceHeight = randInt(5, h / 3);
            context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
            context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
        }
    };

    var randInt = function(a, b) {
        return ~~(Math.random() * (b - a) + a);
    };

});