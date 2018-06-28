function getSize() {
	var w = window,
				d = document,
				e = d.documentElement,
				g = d.getElementsByTagName('body')[0],
				x = w.innerWidth || e.clientWidth || g.clientWidth,
				y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	return [x, y];
}

var NumImgs = 5;
var NumBgs = 3;

var tween;
var imgs = [];

for (i = 0; i < NumImgs; ++i) {
  var img = document.createElement('img');
  img.src = 'qrs/' + i + '.gif';
  img.className = 'qr';
  imgs.push(img);
}

var bodyEl = document.querySelector('body');
var howler = new Howl({
  src: 'bins/airhorn.mp3'
});

window.onload = function start() {
  for (i = 0; i < imgs.length; ++i) {
    var img = imgs[i];
    bodyEl.appendChild(img);
  }

	var interval = 25;
  var tweenCount = 0;
	window.setInterval(function () {
		if (!tween || !tween.isActive()) {
			tween = TweenMax.to(".qr", 3, {
				x: function() {
					return Math.random() * (getSize()[0] - 600);
				},
				y: function() {
					return Math.random() * (getSize()[1] - 600);
				},
        rotation: function() {
          return Math.random() * 360;
        },
        width: function() {
          return 50 + (Math.random() * 325);
        },
        opacity: function() {
          return Math.random() * 1;
        },
				ease: Elastic.easeIn,
				onComplete: function() { 
          howler.play();
					tweenCount++;
					var bgIndex = tweenCount % NumBgs;
					console.log('elapsed ' + bgIndex);
					bodyEl.style.background = 'url(bins/' + bgIndex + '.png)';
        }
			})
		}
	}, interval);
}
