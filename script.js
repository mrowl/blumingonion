function getSize() {
	var w = window,
				d = document,
				e = d.documentElement,
				g = d.getElementsByTagName('body')[0],
				x = w.innerWidth || e.clientWidth || g.clientWidth,
				y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	return [x, y];
}

var NumImgs = 3;

var tween;
var imgs = [];

for (i = 0; i < NumImgs; ++i) {
  var img = document.createElement('img');
  img.src = 'qrs/' + i + '.gif';
  img.className = 'qr';
  imgs.push(img);
}

var bodyEl = document.querySelector('body');
console.log(bodyEl);
window.onload = function start() {
  for (i = 0; i < imgs.length; ++i) {
    var img = imgs[i];
    console.log(img);
    bodyEl.appendChild(img);
  }

	window.setInterval(function () {
		if (!tween || !tween.isActive()) {
			tween = TweenMax.to(".qr", 2, {
				x: function() {
					return Math.random() * (getSize()[0] - 400);
				},
				y: function() {
					return Math.random() * (getSize()[1] - 400);
				},
        width: function() {
          return 50 + (Math.random() * 350);
        },
        opacity: function() {
          return Math.random() * 1;
        },
				//yoyo: true,
				ease: Power1.easeIn,
				//repeat: -1,
				onComplete: function() { $(this).; }
			})
		}
	}, 50);
}
