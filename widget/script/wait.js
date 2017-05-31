/*
	等待画面
*/
function Wait() {
    this.com = null;
    this.span = null;
    this.img = null;

}
Wait.prototype.createBG = function(opacity) {
    this.com = $('<div id="bg"></div>');

    this.com.css({
        'overflow': 'auto',
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'backgroundColor': '#fff',
        'z-index': '1000',
        'top': '0',
        'left': '0',
        'opacity': opacity
    });

    return this.com;
    /*$('body').prepend(com);*/
};

Wait.prototype.createAnimate = function(Imgurl) {
    var bg = this.createBG(0.8);
    this.span = $('<span class="animate"></span>');
    this.img = $("<img class='fly' src=" + Imgurl + " alt=''>");
    this.span.css({
        'display': 'inline-block',
        'position': 'absolute',
        'width': '200px',
        'height': '200px',
        'top': '0',
        'left': '0',
        'text-align': 'center',
        'font-size': '24px',
        'color': '#fff'
    });
    this.img.css({
        'max-width': '100%',
    });
    var position = this.span.offset();
    /*console.log($(window).width());*/
    position.top = $(window).height() / 2 - 100;
    position.left = $(window).width() / 2 - 100;
    this.span.offset(position);
    this.span.append(this.img);
};
Wait.prototype.execAnimate = function() {
    $('body').prepend(this.com.append(this.span));
}
Wait.prototype.detachAnimate = function() {
    /*暂时移除*/
    $(this.com).detach();
};
Wait.prototype.removeAnimate = function() {
    /*永久移除*/
    $(this.com).remove();
};
/*
例子：
var s;
s = new Wait();
s.createAnimate("./components/waitAnimate/img/loading2.png");//填写图片url
s.execAnimate();//执行动画
*/