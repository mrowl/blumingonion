function getSize() {
	var w = window,
				d = document,
				e = d.documentElement,
				g = d.getElementsByTagName('body')[0],
				x = w.innerWidth || e.clientWidth || g.clientWidth,
				y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	return [x, y];
}

var tween;

window.onload = function start() {
	window.setInterval(function () {
		if (!tween || !tween.isActive()) {
			tween = TweenMax.to("qr", 0.575, {
				x: function() {
					return Math.random() * getSize()[0];
				},
				y: function() {
					return Math.random() * getSize()[1];
				},
				//yoyo: true,
				ease: Power1.easeIn,
				//repeat: -1,
				//onComplete: function() { $(this).; }
			})
		}
	}, 50);
}
function qrs() {

}
//var tl = new TimelineMax();
//tl.add(
//);
