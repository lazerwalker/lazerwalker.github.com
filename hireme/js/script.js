// Lightbox library requires this var to be set
currPath = 'js/slidewindow/';

var images = document.querySelectorAll('.zoomable a');
for(var i=0; i < images.length; i++) {
	images[i].addEventListener('click', function(e) {
		showSlideWindow(this);
		e.preventDefault();
	});
}
